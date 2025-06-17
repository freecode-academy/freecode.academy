import { objectType } from 'nexus'

export const ChatRoomInvitation = objectType({
  name: 'ChatRoomInvitation',
  sourceType: {
    module: '@prisma/client',
    export: 'ChatRoomInvitation',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('User', {
      type: 'User',
      // @ts-expect-error types
      resolve({ User }, _, ctx) {
        return User ? ctx.prisma.user.findUnique({ where: { id: User } }) : null
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
    t.field('ChatRoom', {
      type: 'ChatRoom',
      resolve({ ChatRoom }, _, ctx) {
        return ChatRoom
          ? ctx.prisma.chatRoom.findUnique({ where: { id: ChatRoom } })
          : null
      },
    })
  },
})
