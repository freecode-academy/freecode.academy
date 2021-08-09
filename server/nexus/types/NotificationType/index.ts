import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'

// TODO Перепроверить запросы
export const NotificationTypeExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.notificationTypes({
      description: 'Список уведомлений',
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('notificationTypesCount', {
      description: 'Количество уведомлений',
      args: {
        where: 'NotificationTypeWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.notificationType.count({
          where: args.where as Prisma.NotificationTypeCountArgs['where'],
        })
      },
    })

    // t.crud.notificationType({
    //   description: 'Уведомление',
    // })

    // t.nonNull.field('notificationTypesConnection', {
    //   type: 'NotificationTypeConnection',
    //   args: {
    //     where: 'NotificationTypeWhereInput',
    //     orderBy: 'NotificationTypeOrderByInput',
    //     first: 'Int',
    //     skip: 'Int',
    //   },
    //   resolve: async (_, args, ctx) => {
    //     const where = args.where as Prisma.NotificationTypeWhereInput
    //     const orderBy = args.orderBy as Prisma.NotificationTypeOrderByInput
    //     const take = args.first || undefined
    //     const skip = args.skip || undefined

    //     const countPromise = ctx.prisma.notificationType.count({
    //       where,
    //     })

    //     const notificationTypesPromise = ctx.prisma.notificationType.findMany({
    //       where,
    //       orderBy: orderBy ? [orderBy] : undefined,
    //       take,
    //       skip,
    //     })

    //     return Promise.all([countPromise, notificationTypesPromise]).then((results) => {
    //       return {
    //         aggregate: {
    //           count: results[0],
    //         },
    //         edges: results[1].map((n) => {
    //           return {
    //             node: n,
    //           }
    //         }),
    //       }
    //     })
    //   },
    // })
  },
})

export const NotificationType = objectType({
  name: 'NotificationType',
  sourceType: {
    module: '@prisma/client',
    export: 'NotificationType',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.id('code')
    t.string('comment')
    t.int('oldID')
  },
})
