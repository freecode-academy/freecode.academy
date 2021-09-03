import { Prisma, Resource } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { sendNotifications } from './sendNotifications'

/**
 * Создаем и отправляем уведомления
 * @result: Resource
 */
export async function createNotifications(
  result: Resource,
  ctx: PrismaContext
) {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    return
  }

  // /**
  //  * Получаем данные созданного объекта
  //  */
  // const Resource = await this.ctx.db.query.resource({
  //   where: {
  //     id: result.id,
  //   },
  // }, `{
  //   id
  //   type
  //   name
  //   uri
  //   contentText,
  //   CreatedBy {
  //     id
  //     username
  //   }
  //   Topic {
  //     id
  //     name
  //     uri
  //   }
  //   Task {
  //     id
  //     name
  //   }
  // }`)
  //   .catch(console.error);

  /**
   * Получаем данные созданного объекта
   */
  const Resource = await ctx.prisma.resource
    .findUnique({
      where: {
        id: result.id,
      },
      include: {
        User: true,
        Resource_ResourceToResource_Topic: true,
        Task_ResourceToTask: true,
      },
    })
    .catch(console.error)

  if (Resource) {
    /**
     * отправляем уведомления
     */

    const siteUrl = 'https://freecode.academy'

    const {
      // id: resourceId,
      uri: resourceUri,
      name: resourceName,
      contentText,
      type,
      Resource_ResourceToResource_Topic: Topic,
      Task_ResourceToTask: Task,
    } = Resource

    switch (type) {
      case 'Comment':
        if (Topic) {
          const { id: topicID, name: topicName, uri: TopicUri } = Topic

          const subject = `Новый комментарий в топике ${topicName}`
          const message = `<p>
              В топике <a href="${siteUrl}${TopicUri}">${topicName}</a> создан новый комментарий.
            </p>
              <div>
                ${contentText?.substr(0, 1000)}
              </div>
            `

          /**
           * Получаем всех пользователей, которые написали топик
           * или комментарий в топике
           */
          // const usersWhere = {
          //   id_not: currentUserId,
          //   Resources_some: {
          //     OR: [
          //       {
          //         id: topicID,
          //       },
          //       {
          //         Topic: {
          //           id: topicID,
          //         },
          //       },
          //     ],
          //   },
          //   NotificationTypes_some: {
          //     name_in: ["new_comment", "new_reply", "new_comments_in_my_topics"],
          //   },
          // }

          const usersWhere: Prisma.UserWhereInput = {
            // id_not: currentUserId,
            id: {
              not: currentUserId,
            },

            /**
             * Кто создал этот топик или написал в нем хоть один комментарий
             */
            Resources: {
              some: {
                OR: [
                  {
                    id: topicID,
                  },
                  {
                    Resource_ResourceToResource_Topic: {
                      id: topicID,
                    },
                  },
                ],
              },
            },
            NotificationTypes_UserNotificationTypes: {
              some: {
                name: {
                  in: ['new_comment', 'new_reply', 'new_comments_in_my_topics'],
                },
              },
              // name_in: ["new_comment", "new_reply", "new_comments_in_my_topics"],
            },
          }

          sendNotifications(
            {
              message,
              subject,
              rank: 100,
            },
            usersWhere,
            ctx
          )

          return
        } else if (Task) {
          const { id: taskId, name: taskName } = Task

          const subject = `Новый комментарий в задаче ${taskName}`
          const message = `<p>
              В задаче <a href="${siteUrl}/tasks/${taskId}">${taskName}</a> создан новый <a href="${siteUrl}${resourceUri}">комментарий</a>.
            </p>
              <div>
                ${contentText?.substr(0, 1000)}
              </div>
            `

          // TODO Перепроверить запрос.
          const usersWhere: Prisma.UserWhereInput = {
            // id_not: currentUserId,
            id: {
              not: currentUserId,
            },
            OR: [
              {
                // Админы
                sudo: true,
              },
              {
                // Кто создал проект для задачи
                // ProjectsCreated_some: {
                //   ProjectTasks_some: {
                //     Task: {
                //       id: taskId
                //     },
                //   },
                // },
                Projects_PrismaProjectUsers: {
                  some: {
                    ProjectTasks: {
                      some: {
                        Task: {
                          in: taskId,
                        },
                      },
                    },
                  },
                },
              },
              {
                // Кто участвует в проекте задачи
                // Projects_some: {
                //   Project: {
                //     ProjectTasks_some: {
                //       Task: {
                //         id: taskId
                //       },
                //     },
                //   },
                // },
                ProjectMembers_ProjectMember_CreatedByToUser: {
                  some: {
                    Project_ProjectToProjectMember: {
                      ProjectTasks: {
                        some: {
                          Task: taskId,
                        },
                      },
                    },
                  },
                },
              },
              {
                // Кто создал задачу
                // TasksCreated_some: {
                //   id: taskId
                // }
                Tasks: {
                  some: {
                    id: taskId,
                  },
                },
              },
              {
                // Кто участвует в задаче
                // Tasks_some: {
                //   Task: {
                //     id: taskId
                //   },
                // }
                TaskMembers_TaskMember_CreatedByToUser: {
                  some: {
                    Task: taskId,
                  },
                },
              },
              {
                // Кто работал по задаче
                // Timers_some: {
                //   Task: {
                //     id: taskId
                //   }
                // }
                Timers: {
                  some: {
                    Task_TaskToTimer: {
                      id: taskId,
                    },
                  },
                },
              },
              {
                // Кто создавал какие-либо публикации к задаче (в том числе и комментарии)
                // Resources_some: {
                //   Task: {
                //     id: taskId
                //   }
                // },
                Resources: {
                  some: {
                    Task: taskId,
                  },
                },
              },
            ],
            NotificationTypes_UserNotificationTypes: {
              some: {
                name: {
                  in: ['new_comment', 'new_reply', 'new_comments_in_my_topics'],
                },
              },
            },
          }

          sendNotifications(
            {
              message,
              subject,
              rank: 100,
            },
            usersWhere,
            ctx
          )

          return
        }

        break

      case 'Topic':
        {
          let content

          if (contentText) {
            content = `
              <div>
                ${contentText.substr(0, 3000)}
              </div>
              `
          }

          const subject = `Новый топик ${resourceName}`
          const message = `<p>
              <a href="${siteUrl}${resourceUri}">${resourceName}</a>.
            </p>
              ${content}
            `

          /**
           * Получаем всех пользователей, кроме текущего
           */
          const usersWhere: Prisma.UserWhereInput = {
            id: {
              not: currentUserId,
            },
            // NotificationTypes_some: {
            //   name: "new_topic",
            // },
            NotificationTypes_UserNotificationTypes: {
              some: {
                name: 'new_topic',
              },
            },
          }

          sendNotifications({ message, subject }, usersWhere, ctx)
        }

        break

      default:
    }
  }
}
