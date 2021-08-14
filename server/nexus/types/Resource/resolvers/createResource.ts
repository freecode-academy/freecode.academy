/* eslint-disable no-console */
import { Prisma, Resource } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'

import { uid } from 'uid'
import { prepareContent } from './helpers/prepareContent'
import { prepareName, prepareUri } from './helpers/prepareUri'

function addError(message: string) {
  throw new Error(message)
}

/**
 * Создание ресурса
 */
export const createResource = async (
  args: Prisma.ResourceCreateArgs,
  ctx: PrismaContext
): Promise<Resource | void> => {
  const { currentUser } = ctx

  const { id: currentUserId } = currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const {
    data: {
      // blogID,
      // topicID,
      // parent,
      // topic_tags,

      // Временно, так как у кого-нибудь могут закешироваться данные в браузере
      // text: fake,
      ...data
    },
  } = args

  const { id: newResourceId = uid(25), type, name } = data

  Object.assign(data, {
    id: newResourceId,
  })

  switch (type) {
    case 'Blog':
      {
        prepareContent(args, data)

        // if (!contentText) {
        //   // this.addFieldError("content", "Не заполнен текст");
        //   this.addError("Не заполнен текст");
        //   return;
        // }

        const uri = `/blogs/${name}`

        Object.assign(data, {
          uri,
          isfolder: true,
        })

        Object.assign(args, {
          data,
        })

        // const result = await super.create(method, args, info);
        // const result = await ctx.prisma.resource.create(args);
        const result = await createResourceSuper(args, ctx)

        return result
      }

      break

    case 'Topic':
      {
        const { contentText } = prepareContent(args, data) || {}

        if (!contentText) {
          // this.addFieldError("content", "Не заполнен текст");
          // this.addError("Не заполнен текст");
          // return;
        }

        const uri = args.data.uri || `/topics/${name}`

        // let connect;

        // let Blog;

        // if (blogID) {
        //   Blog = {
        //     connect: {
        //       id: blogID,
        //     },
        //   }
        // }
        // else {
        //   connect = {
        //     oldID: 637,
        //   };
        // }

        Object.assign(data, {
          uri,
          isfolder: false,
          // Blog,
        })

        Object.assign(args, {
          data,
        })

        // const result = await super.create(method, args, info);

        // const {
        //   id: topicID,
        //   name: topicName,
        //   uri: topicUri,
        // } = result || {};

        // /**
        //  * Если был создан топик, отправляем уведомления
        //  */
        // if (topicID) {

        //   let content;

        //   const siteUrl = "https://freecode.academy";

        //   if (contentText) {

        //     content = `
        //     <div>
        //       ${contentText.substr(0, 3000)}
        //     </div>
        //     `;
        //   }

        //   let subject = `Новый топик ${topicName}`;
        //   let message = `<p>
        //     <a href="${siteUrl}${topicUri}">${topicName}</a>.
        //   </p>
        //     ${content}
        //   `;

        //   const usersWhere = {
        //     id_not: currentUserId,
        //     NotificationTypes_some: {
        //       name: "new_topic",
        //     },
        //   }

        //   this.sendNotifications({ message, subject }, usersWhere);

        // }

        // return result;
      }

      break

    case 'Comment':
      {
        Object.assign(data, {
          // УРИ создаваемого комментария по-умолчанию (может быть переопределен ниже)
          uri: `/comments/${newResourceId}`,
          isfolder: false,
        })

        const { contentText } = prepareContent(args, data) || {}

        if (!contentText) {
          // this.addFieldError("content", "Не заполнен текст");
          // this.addError("Не заполнен текст");
          // return;
        }

        // else

        let name =
          (contentText &&
            typeof contentText === 'string' &&
            contentText.substr(0, 50)) ||
          undefined

        // if (!topicID) {
        //   return this.addError("Не был указан ID топика");
        // }
        // else {

        const topicID = ''

        // eslint-disable-next-line no-constant-condition
        if (1 === 1) {
          throw new Error('Feed fix')
        }

        if (topicID) {
          // Проверяем есть ли такой топик
          // const exists = await db.exists.Resource({
          //   id: topicID,
          //   type: "Topic",
          // });

          // Получаем топик
          const Topic = await ctx.prisma.resource.findUnique({
            where: {
              id: topicID,
            },
          })

          if (!Topic) {
            return addError('Не был получен топик')
          } else {
            const { uri: TopicUri, name: topicName } = Topic

            if (!name) {
              name = `Комментарий к топику ${topicName}`
            }

            Object.assign(data, {
              // name,
              // uri: `${TopicUri}/comments/${name}`,
              uri: `/comments/${TopicUri}/${name}`,
              isfolder: false,

              Topic: {
                connect: {
                  id: topicID,
                },
              },
            })
          }
        }
        // else if (data.Task && data.Task.connect && data.Task.connect.id) {
        else if (data.Task) {
          {
            // const Task = await db.query.task({
            //   where: data.Task.connect,
            // });
            const Task = await ctx.prisma.task.findUnique({
              where: {
                id: data.Task,
              },
            })

            if (!Task) {
              // return this.addError("Не была получена задача");
              return addError('Не была получена задача')
            }

            const { name: taskName } = Task

            if (!name) {
              name = `Комментарий к задаче ${taskName}`
            }
          }
        }
        // else {
        //   throw new Error ("Не указан родительский объект для комментария");
        // }

        if (name) {
          Object.assign(data, {
            name,
          })
        }

        Object.assign(args, {
          data,
        })

        // const result = await super.create(method, args, info);

        // const {
        //   id: commentId,
        // } = result || {};

        // /**
        //  * Если был создан комментарий,
        //  */
        // if (commentId) {

        //   /**
        //    * Обновляем дату топика, чтобы сортировку актуализировать
        //    */
        //   await db.mutation.updateResource({
        //     data: {
        //       mockUpdate: new Date(),
        //     },
        //     where: {
        //       id: topicID,
        //     },
        //   })
        //     .catch(error => {
        //       /**
        //        * Не обламываем процесс, если не получилось обновить дату топика
        //        */
        //       this.error(error);
        //       console.error(chalk.red("Update Topic error"), error);
        //     });

        //   /**
        //    * отправляем уведомления
        //    */

        //   const siteUrl = "https://prisma-cms.com";

        //   let subject = `Новый комментарий в топике ${topicName}`;
        //   let message = `<p>
        //     В топике <a href="${siteUrl}${TopicUri}">${topicName}</a> создан новый комментарий.
        //   </p>
        //     <div>
        //       ${contentText.substr(0, 1000)}
        //     </div>
        //   `;

        //   const usersWhere = {
        //     id_not: currentUserId,
        //     Resources_some: {
        //       OR: [
        //         {
        //           id: topicID,
        //         },
        //         {
        //           Topic: {
        //             id: topicID,
        //           },
        //         },
        //       ],
        //     },
        //     NotificationTypes_some: {
        //       name_in: ["new_comment", "new_reply", "new_comments_in_my_topics"],
        //     },
        //   }

        //   this.sendNotifications({
        //     message,
        //     subject,
        //     rank: 100,
        //   }, usersWhere);

        // }

        // return result;
      }

      break

    default:
  }

  // let uriData = await this.prepareUri(args);

  // Object.assign(data, {
  //   ...uriData,
  //   ...this.getCreatedBy(),
  // });

  Object.assign(args, {
    data,
  })

  // return this.addFieldError("test", "error");

  console.log(
    'createResource complete data',
    JSON.stringify(data, undefined, 2)
  )

  /**
   * Создаем объект
   */
  // const result = await super.create(method, args, info);
  // const result = await ctx.prisma.resource.create(args);
  const result = await createResourceSuper(args, ctx)

  /**
   * Отправляем уведомления
   */
  // TODO Restore
  // createNotifications(result);

  return result
}

async function createResourceSuper(
  args: Prisma.ResourceCreateArgs,
  ctx: PrismaContext
) {
  // const {
  //   ctx,
  // } = this;

  // const {
  //   getProjectFromRequest,
  // } = ctx;

  const {
    data: {
      // name,
      // uri,
      PrismaProject,
      ...data
    },
  } = args

  const uriData = await prepareUri(args, undefined, ctx)

  /**
   * Пытаемся получить проект по заголовкам запроса.
   * Если получим, то устанавливаем в качестве проекта.
   * Если нет, то сбрасываем.
   */
  // const project = await getProjectFromRequest(ctx);

  // if (project) {

  //   const {
  //     id: projectId,
  //   } = project;

  //   PrismaProject = {
  //     connect: {
  //       id: projectId,
  //     },
  //   }

  // }
  // else {
  //   PrismaProject = undefined;
  // }

  // console.log("PrismaProject", PrismaProject);

  Object.assign(data, {
    PrismaProject,
    ...uriData,
    // ...this.getCreatedBy(),
    name: prepareName(args),
  })

  Object.assign(args, {
    data,
  })

  // return this.addFieldError("test", "error");

  if (!data.uri) {
    // return this.addError("Не был сформирован uri документа");

    throw new Error('Не был сформирован uri документа')
  }

  // return super.create(method, args, info);

  return ctx.prisma.resource.create(args)
}
