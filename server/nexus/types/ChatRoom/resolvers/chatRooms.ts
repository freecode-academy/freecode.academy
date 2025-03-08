import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { getChatRoomsConditions } from '../helpers'

export const chatRoomsResolver: FieldResolver<'Query', 'chatRooms'> = async (
  _root,
  args,
  ctx
) => {
  const params = args as Prisma.ChatRoomFindManyArgs

  const where = getChatRoomsConditions(params.where, ctx)

  const chatRoom = await ctx.prisma.chatRoom.findMany({
    ...params,
    where,
  })

  return chatRoom
}
