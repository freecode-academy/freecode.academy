import { User } from '@prisma/client'
import { PrismaContext } from '../../nexus/context'
import { AiAgents, AiAgentUsername } from '../interfaces'

const OPENAI_API_BASE_URL =
  process.env.OPENAI_API_BASE_URL || 'https://api.openai.com/v1'

const OPENAI_DEFAULT_MODEL = process.env.OPENAI_DEFAULT_MODEL || 'gpt-4.1-mini'

type getAiUserProps = {
  ctx: PrismaContext
}

export async function getAiUser({ ctx }: getAiUserProps): Promise<User> {
  const { prisma, currentUser } = ctx

  const aiUserUsername = currentUser?.sudo
    ? AiAgentUsername.AdminAssistent
    : AiAgentUsername.Main

  let aiUser = await prisma.user.findFirst({
    where: {
      active: true,
      type: 'AI',
      username: aiUserUsername,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (!aiUser) {
    const { model } = AiAgents[aiUserUsername]

    const aiAgentData = {
      model: model || OPENAI_DEFAULT_MODEL,
      endpoint: OPENAI_API_BASE_URL,
    }

    aiUser = await prisma.user
      .create({
        data: {
          type: 'AI',
          username: aiUserUsername,
          data: aiAgentData,
          active: true,
          createdAt: new Date(),
        },
      })
      .catch((error) => {
        console.error(error)

        return null
      })
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('sendAiMessage user', aiUser)
  }

  if (!aiUser) {
    throw new Error('Can not get AI user')
  }

  return aiUser
}
