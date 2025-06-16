import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { getChatMessageOldsConditions } from '../helpers'

export const chatMessageOldsResolver: FieldResolver<
  'Query',
  'chatMessageOlds'
> = async (_root, args, ctx) => {
  const params = args as Prisma.ChatMessageOldFindManyArgs

  const chatMessageOlds = await ctx.prisma.chatMessageOld.findMany({
    ...params,
    where: getChatMessageOldsConditions(params.where, ctx),
  })

  return chatMessageOlds
}
