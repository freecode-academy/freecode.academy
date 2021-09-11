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
      resolve() {
        return []
      },
    })

    t.nonNull.int('noticesCount', {
      description: 'Количество уведомлений',
      args: {
        where: 'NoticeWhereInput',
      },
      resolve(_, _args, _ctx) {
        // return ctx.prisma.notice.count({
        //   where: args.where as Prisma.NoticeCountArgs['where'],
        // })
        return 0
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
