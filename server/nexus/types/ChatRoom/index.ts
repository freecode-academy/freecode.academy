import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'

// TODO Добавить проверку на владельца в запросах
export const ChatRoomExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.chatRoom()

    t.crud.chatRooms({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('chatRoomsCount', {
      description: 'Количество чат-комнат',
      args: {
        where: 'ChatRoomWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.ChatRoomWhereInput

        return ctx.prisma.chatRoom.count({
          where,
        })
      },
    })
  },
})

export const ChatRoom = objectType({
  name: 'ChatRoom',
  sourceType: {
    module: '@prisma/client',
    export: 'ChatRoom',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.string('description')
    t.string('image')
    t.id('code')
    t.boolean('isPublic')
    t.list.nonNull.field('Messages', {
      type: 'ChatMessage',
      resolve({ id }, _, ctx) {
        return ctx.prisma.chatMessage.findMany({
          where: {
            Room: id,
          },
        })
      },
    })
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })

    // TODO Перепроверить логику
    t.list.nonNull.field('Members', {
      type: 'User',
      resolve({ id }, _, ctx) {
        return ctx.prisma.chatRoom
          .findUnique({ where: { id } })
          .User_ChatRoomsMembers()
      },
    })

    t.list.nonNull.field('Invitations', {
      type: 'ChatRoomInvitation',
      resolve({ id }, _, ctx) {
        return ctx.prisma.chatRoomInvitation.findMany({
          where: {
            ChatRoom: id,
          },
        })
      },
    })
  },
})
