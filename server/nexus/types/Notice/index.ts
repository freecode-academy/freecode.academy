import { Prisma } from '@prisma/client'
import { enumType, objectType, extendType, nonNull } from 'nexus'

// TODO Перепроверить запросы
export const NoticeExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.notice({
      description: 'Уведомление',
    })

    t.crud.notices({
      description: 'Список уведомлений',
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('noticesCount', {
      description: 'Количество уведомлений',
      args: {
        where: 'NoticeWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.notice.count({
          where: args.where as Prisma.NoticeCountArgs['where'],
        })
      },
    })

    t.nonNull.field('noticesConnection', {
      type: 'NoticeConnection',
      args: {
        where: 'NoticeWhereInput',
        orderBy: 'NoticeOrderByInput',
        first: 'Int',
        skip: 'Int',
      },
      resolve: async (_, args, ctx) => {
        const where = args.where as Prisma.NoticeWhereInput
        const orderBy = args.orderBy as Prisma.NoticeOrderByInput
        const take = args.first || undefined
        const skip = args.skip || undefined

        const countPromise = ctx.prisma.notice.count({
          where,
        })

        const noticesPromise = ctx.prisma.notice.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
          take,
          skip,
        })

        return Promise.all([countPromise, noticesPromise]).then((results) => {
          return {
            aggregate: {
              count: results[0],
            },
            edges: results[1].map((n) => {
              return {
                node: n,
              }
            }),
          }
        })
      },
    })
  },
})

export const NoticeExtendType = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('deleteNotice', {
      type: 'Notice',
      args: {
        where: nonNull('NoticeWhereUniqueInput'),
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.NoticeWhereUniqueInput

        return ctx.prisma.notice.delete({
          where,
        })
      },
    })
  },
})

export const Notice = objectType({
  name: 'Notice',
  sourceType: {
    module: '@prisma/client',
    export: 'Notice',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.field('type', {
      type: 'NoticeType',
    })
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.field('User', {
      type: 'User',
      resolve({ User }, _, ctx) {
        return User ? ctx.prisma.user.findUnique({ where: { id: User } }) : null
      },
    })
    t.field('ChatMessage', {
      type: 'ChatMessage',
      resolve({ ChatMessage }, _, ctx) {
        return ChatMessage
          ? ctx.prisma.chatMessage.findUnique({ where: { id: ChatMessage } })
          : null
      },
    })
    t.field('ChatRoomInvitation', {
      type: 'ChatRoomInvitation',
      resolve({ id }, _, ctx) {
        return ctx.prisma.chatRoomInvitation.findFirst({
          where: { Notice: id },
        })
      },
    })
  },
})

export const NoticeType = enumType({
  name: 'NoticeType',
  members: ['ChatMessage', 'Call', 'CallRequest', 'ChatRoomInvitation'],
})

export const AggregateNotice = objectType({
  name: 'AggregateNotice',
  definition(t) {
    t.nonNull.int('count')
  },
})

export const NoticeEdge = objectType({
  name: 'NoticeEdge',
  definition(t) {
    t.nonNull.field('node', {
      type: 'Notice',
    })
  },
})

export const NoticeConnection = objectType({
  name: 'NoticeConnection',
  definition(t) {
    t.nonNull.list.field('edges', {
      type: 'NoticeEdge',
    })
    t.nonNull.field('aggregate', {
      type: 'AggregateNotice',
    })
  },
})
