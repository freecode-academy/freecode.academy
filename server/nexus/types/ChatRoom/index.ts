// import { Prisma } from '@prisma/client'
import { objectType } from 'nexus'
// import { getChatRoomsConditions } from './helpers'
// import { chatRoomResolver } from './resolvers/chatRoom'
// import { chatRoomsResolver } from './resolvers/chatRooms'

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
      type: 'ChatMessageOld',
      resolve({ id }, _, ctx) {
        return ctx.prisma.chatMessageOld.findMany({
          where: {
            Room: id,
          },
        })
      },
    })
    t.field('CreatedBy', {
      type: 'User',
      // @ts-expect-error types
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
  },
})

// TODO Добавить проверку на владельца в запросах
// export const ChatRoomExtendQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.crud.chatRoom({
//       resolve: chatRoomResolver,
//     })

//     t.crud.chatRooms({
//       filtering: true,
//       ordering: true,
//       resolve: chatRoomsResolver,
//     })

//     t.nonNull.int('chatRoomsCount', {
//       description: 'Количество чат-комнат',
//       args: {
//         where: 'ChatRoomWhereInput',
//       },
//       resolve(_, args, ctx) {
//         const where = args.where as Prisma.ChatRoomWhereInput | undefined

//         return ctx.prisma.chatRoom.count({
//           where: getChatRoomsConditions(where, ctx),
//         })
//       },
//     })
//   },
// })
