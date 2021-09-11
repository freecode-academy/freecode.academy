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
