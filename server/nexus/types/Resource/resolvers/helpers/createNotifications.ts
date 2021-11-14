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
  const currentUser = ctx.currentUser

  if (!currentUser) {
    return
  }

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
            NotificationTypes_UserNotificationTypes: {
              some: {
                name: {
                  in: ['new_comment', 'new_reply', 'new_comments_in_my_topics'],
                },
              },
              // name_in: ["new_comment", "new_reply", "new_comments_in_my_topics"],
            },
            id: {
              not: currentUser.id,
            },
            OR: [
              {
                sudo: true,
              },
              {
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
              },
            ],
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
            NotificationTypes_UserNotificationTypes: {
              some: {
                name: {
                  in: ['new_comment', 'new_reply', 'new_comments_in_my_topics'],
                },
              },
            },
            id: {
              not: currentUser.id,
            },
            OR: [
              {
                // Админы
                sudo: true,
              },
              {
                // Кто создал проект для задачи
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
                Tasks: {
                  some: {
                    id: taskId,
                  },
                },
              },
              {
                // Кто участвует в задаче
                TaskMembers_TaskMember_CreatedByToUser: {
                  some: {
                    Task: taskId,
                  },
                },
              },
              {
                // Кто работал по задаче
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
                Resources: {
                  some: {
                    Task: taskId,
                  },
                },
              },
            ],
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
              not: currentUser.id,
            },
            NotificationTypes_UserNotificationTypes: {
              some: {
                name: 'new_topic',
              },
            },
          }

          /**
           * Если пользователь не судо, то отправляем только суперпользователям
           */
          if (!currentUser.sudo) {
            usersWhere.sudo = true
          }

          sendNotifications({ message, subject }, usersWhere, ctx)
        }

        break

      default:
    }
  }
}
