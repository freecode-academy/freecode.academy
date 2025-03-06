/* eslint-disable no-console */
import { FieldResolver } from 'nexus'
import {
  ChatCompletionMessageParam,
  ChatCompletionUserMessageParam,
} from 'openai/resources'

export const openAiResolver: FieldResolver<'Mutation', 'openAi'> = async (
  _root,
  { query },
  ctx
) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Not authenticated')
  }

  const message: ChatCompletionUserMessageParam = {
    role: 'user',
    content: query,
  }

  await ctx.prisma.aiMessage.create({
    data: {
      content: query,
      role: 'user',
      CreatedBy: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  })

  const messages: ChatCompletionMessageParam[] = (
    await ctx.prisma.aiMessage.findMany({
      where: {
        CreatedBy: {
          id: currentUser.id,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
  ).map((n) => ({
    role: n.role === 'user' ? 'user' : 'assistant',
    content: n.content,
  }))

  messages.push(message)

  const response = await ctx.sendMessageToOpenAi(messages)

  console.log('openAiResolver response', response, typeof response)

  const responseMessage =
    response.response ?? response.content ?? response.value ?? response.error

  if (!responseMessage) {
    throw new Error('No response')
  }

  await ctx.prisma.aiMessage.create({
    data: {
      content: responseMessage.toString(),
      role: 'assistant',
      CreatedBy: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  })

  return responseMessage
}
