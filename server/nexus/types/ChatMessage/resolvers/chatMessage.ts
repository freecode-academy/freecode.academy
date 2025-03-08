import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const chatMessageResolver: FieldResolver<
  'Query',
  'chatMessage'
> = async (_root, args, ctx) => {
  const { currentUser } = ctx

  const chatMessage = await ctx.prisma.chatMessage.findUnique({
    where: args.where as Prisma.ChatMessageFindUniqueArgs['where'],
    include: {
      ChatRoom: true,
    },
  })

  if (chatMessage) {
    // TODO Сейчас тут только проверка на публичность комнаты
    // Нужно добавить проверку на доступ к приватным комнатам
    if (
      !currentUser?.sudo &&
      !(chatMessage.ChatRoom && chatMessage.ChatRoom?.isPublic)
    ) {
      // TODO Fix access to private rooms
      throw new Error('Access denied')
    }
  }

  return chatMessage
}
