import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { getChatMessagesConditions } from '../helpers'

export const chatMessagesResolver: FieldResolver<
  'Query',
  'chatMessages'
> = async (_root, args, ctx) => {
  const params = args as Prisma.ChatMessageFindManyArgs

  const chatMessages = await ctx.prisma.chatMessage.findMany({
    ...params,
    where: getChatMessagesConditions(params.where, ctx),
  })

  return chatMessages
}
