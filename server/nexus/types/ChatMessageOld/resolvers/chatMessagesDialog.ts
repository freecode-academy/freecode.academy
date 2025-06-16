import { FieldResolver } from 'nexus'

export const chatMessageOldsDialogResolver: FieldResolver<
  'Query',
  'chatMessageOldsDialog'
> = async (_root, _args, ctx) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('User not authenticated')
  }

  const MAIN_AI_AGENT_USERNAME = process.env.MAIN_AI_AGENT_USERNAME

  if (!MAIN_AI_AGENT_USERNAME) {
    throw new Error('MAIN_AI_AGENT_USERNAME is not defined')
  }

  const mainAiAgentUser = await ctx.prisma.user.findUnique({
    where: {
      username: MAIN_AI_AGENT_USERNAME,
    },
  })

  if (!mainAiAgentUser) {
    throw new Error('Main AI agent not found')
  }

  const where = {
    OR: [
      {
        CreatedBy: currentUser.id,
        toUser: mainAiAgentUser.id,
      },
      {
        CreatedBy: mainAiAgentUser.id,
        toUser: currentUser.id,
      },
    ],
  }

  return ctx.prisma.chatMessageOld.findMany({
    where,
    orderBy: {
      createdAt: 'asc',
    },
  })
}
