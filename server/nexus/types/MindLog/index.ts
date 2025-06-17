import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'
// import { PUBSUB_MINDLOG_ADDED } from '../Message/interfaces'
// import { NexusGenObjects } from 'server/nexus/generated/nexus'

/**
 * Модель лога мышления агента
 */
export const MindLog = objectType({
  name: 'MindLog',
  description: 'Запись в логе мышления агента',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.field('type', { type: 'MindLogType' })
    t.nonNull.string('data')
    t.float('quality')
    t.nonNull.id('createdById')
    t.field('CreatedBy', { type: 'User' })

    // Связь с агентом
    // t.field('Agent', {
    //   type: 'AiAgent',
    //   resolve: (parent, _, ctx) => {
    //     return parent.agentId
    //       ? ctx.prisma.aiAgent.findUnique({
    //           where: { id: parent.agentId },
    //         })
    //       : null
    //   },
    // })
  },
})

export const MindLogExtendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mindLogs({
      filtering: true,
      ordering: true,
      // @ts-expect-error types
      resolve(_, args, ctx) {
        return ctx.prisma.mindLog.findMany({
          ...(args as Prisma.MindLogFindManyArgs),
          include: {
            CreatedBy: true,
          },
        })
      },
    })
  },
})

/**
 * Подписка на создание новых записей в MindLog
 */
// export const mindLogCreatedSubscription = subscriptionField<
//   'mindLogCreated',
//   {
//     mindLogCreated: NexusGenObjects['MindLog']
//   }
// >('mindLogCreated', {
//   type: 'MindLog',
//   description: 'Подписка на создание новых записей в MindLog',
//   subscribe: (_root, _args, ctx) => {
//     return ctx.pubsub.asyncIterator([PUBSUB_MINDLOG_ADDED])
//   },
//   resolve: (payload) => {
//     return payload.mindLogCreated
//   },
// })
