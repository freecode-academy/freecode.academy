import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { NexusGenEnums } from 'server/nexus/generated/nexus'
import { uid } from 'uid'
import { createResource } from '../../resolvers/createResource'
import { prepareContent } from '../../resolvers/helpers/prepareContent'

export const createCommentProcessor: FieldResolver<
  'Mutation',
  'createCommentProcessor'
> = async (_, args, ctx) => {
  const {
    data: { Task: agrsTask, components, content, topicID },
  } = args

  const type: NexusGenEnums['ResourceType'] = 'Comment'

  // const { id: newResourceId = uid(25),  } = data

  const newResourceId = uid(25)

  const data: Prisma.ResourceCreateInput = {
    components,
    content,
    // УРИ создаваемого комментария по-умолчанию (может быть переопределен ниже)
    uri: `/comments/${newResourceId}`,
    isfolder: false,
    id: newResourceId,
    type,
  }

  const { contentText } = prepareContent(data, data) || {}

  let name =
    (contentText &&
      typeof contentText === 'string' &&
      contentText.substr(0, 50)) ||
    undefined

  if (topicID) {
    // Получаем топик
    const Topic = await ctx.prisma.resource.findUnique({
      where: {
        id: topicID,
      },
    })

    if (!Topic) {
      throw new Error('Не был получен топик')
      // return
    } else {
      const { uri: TopicUri, name: topicName } = Topic

      if (!name) {
        name = `Комментарий к топику ${topicName}`
      }

      data.uri = `/comments/${TopicUri}/${name}`

      data.Resource_ResourceToResource_Topic = {
        connect: {
          id: Topic.id,
        },
      }

      // Object.assign(data, {
      //  ,
      //   isfolder: false,

      //   Topic: {
      //     connect: {
      //       id: topicID,
      //     },
      //   },
      // })
    }
  }
  // else if (data.Task && data.Task.connect && data.Task.connect.id) {
  else if (agrsTask?.connect?.id) {
    {
      // const Task = await db.query.task({
      //   where: data.Task.connect,
      // });
      const Task = await ctx.prisma.task.findUnique({
        where: {
          id: agrsTask.connect.id,
        },
      })

      if (!Task) {
        // return this.addError("Не была получена задача");
        throw new Error('Не была получена задача')
        // return
      }

      const { name: taskName } = Task

      if (!name) {
        name = `Комментарий к задаче ${taskName}`
      }

      data.Task_ResourceToTask = {
        connect: {
          id: Task.id,
        },
      }
    }
  }

  if (name) {
    data.name = name
  }

  const resource = await createResource(
    {
      data,
    },
    ctx
  )

  return {
    success: !!resource,
    message: '',
    errors: [],
    data: resource,
  }
}
