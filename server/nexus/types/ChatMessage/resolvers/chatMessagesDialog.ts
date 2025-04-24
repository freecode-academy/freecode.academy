import { FieldResolver } from 'nexus'

export const chatMessagesDialogResolver: FieldResolver<
  'Query',
  'chatMessagesDialog'
> = async (_root, _args, ctx) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('User not authenticated')
  }

  return ctx.prisma.chatMessage.findMany({
    where: {
      OR: [
        {
          CreatedBy: currentUser.id,
        },
        {
          toUser: currentUser.id,
        },
      ],
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
}
