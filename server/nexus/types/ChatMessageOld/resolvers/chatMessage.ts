import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const chatMessageOldResolver: FieldResolver<
  'Query',
  'chatMessageOld'
> = async (_root, args, ctx) => {
  const { currentUser } = ctx

  const chatMessageOld = await ctx.prisma.chatMessageOld.findUnique({
    where: args.where as Prisma.ChatMessageOldFindUniqueArgs['where'],
    include: {
      ChatRoom: true,
    },
  })

  if (chatMessageOld) {
    // TODO Сейчас тут только проверка на публичность комнаты
    // Нужно добавить проверку на доступ к приватным комнатам
    if (
      !currentUser?.sudo &&
      !(chatMessageOld.ChatRoom && chatMessageOld.ChatRoom?.isPublic)
    ) {
      // TODO Fix access to private rooms
      throw new Error('Access denied')
    }
  }

  return chatMessageOld
}
