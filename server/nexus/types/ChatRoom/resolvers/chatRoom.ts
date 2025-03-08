import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const chatRoomResolver: FieldResolver<'Query', 'chatRoom'> = async (
  _root,
  args,
  ctx
) => {
  const { currentUser } = ctx

  const chatRoom = await ctx.prisma.chatRoom.findUnique({
    where: args.where as Prisma.ChatRoomFindUniqueArgs['where'],
  })

  if (chatRoom) {
    if (!currentUser?.sudo && !chatRoom.isPublic) {
      // TODO Fix access to private rooms
      throw new Error('Access denied')
    }
  }

  return chatRoom
}
