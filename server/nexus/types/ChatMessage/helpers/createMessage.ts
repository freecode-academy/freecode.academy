/* eslint-disable no-console */
import { ChatMessage, Prisma, User } from '@prisma/client'
import {
  ChatCompletionMessageParam,
  ChatCompletionUserMessageParam,
} from 'openai/resources'
import { PrismaContext } from 'server/nexus/context'
import { NexusGenAllTypes } from 'server/nexus/generated/nexus'
import { getLessons, getTechnologies, getUsers } from '../../OpenAi/helpers'
import { getTopicAnalysis } from '../../../../modules/OpenAiApi/tools/getTopicAnalysis'
import { getCodeChellangeSolution } from '../../../../modules/OpenAiApi/tools/getCodeChellangeSolution'

type createMessageProps = {
  fromUser: User
  toUser: Prisma.UserWhereUniqueInput
  message: string | null | undefined
  ctx: PrismaContext
}

export async function createMessage({
  fromUser,
  toUser,
  message,
  ctx,
}: createMessageProps): Promise<NexusGenAllTypes['ChatMessageResponse']> {
  let reply: ChatMessage | null | undefined = undefined

  if (!message) {
    throw new Error('Message is required')
  }

  const { prisma, openai } = ctx

  const FromUserAiAgent = await prisma.aiAgent.findFirst({
    where: {
      User: {
        id: fromUser.id,
      },
    },
  })

  const ToUserAiAgent = await prisma.aiAgent.findFirst({
    where: {
      User: {
        id: toUser.id,
      },
    },
  })

  const toUserWgere = toUser as Prisma.UserWhereUniqueInput

  const ToUser = await prisma.user.findUnique({
    where: toUserWgere,
  })

  if (!ToUser) {
    throw new Error('User not found')
  }

  if (fromUser.id === ToUser.id) {
    throw new Error('You can not send message to yourself')
  }

  if (FromUserAiAgent && ToUserAiAgent) {
    throw new Error('AI agent can not send message to AI agent')
  }

  const chatMessage = await prisma.chatMessage.create({
    data: {
      contentText: message,
      ToUser: {
        connect: {
          id: ToUser.id,
        },
      },
      User: {
        connect: {
          id: fromUser.id,
        },
      },
    },
  })

  console.log('chatMessage', chatMessage)

  /**
   * Если это AI агент, то нужно отправить сообщение на обработку
   * и вернуть ответ
   */
  if (ToUserAiAgent) {
    /**
     * Сначала отмечаем сообщение прочтенным
     */
    await prisma.chatMessageReaded.create({
      data: {
        ChatMessage: {
          connect: {
            id: chatMessage.id,
          },
        },
        User_ChatMessageReadedToUser: {
          connect: {
            id: ToUser.id,
          },
        },
      },
    })

    const chatCompletionMessage: ChatCompletionUserMessageParam = {
      /**
       * Здесь даже если это AI агент, то мы всё равно отправляем сообщение как от пользователя
       * так как здесь наш ИИ агент является пользователем
       */
      role: 'user',
      content: message,
      // TODO error BadRequestError: 400 Invalid 'messages[1].name': string does not match pattern. Expected a string that matches the pattern '^[a-zA-Z0-9_-]+$'
      // name: fromUser.fullname || undefined,
    }

    const messages: ChatCompletionMessageParam[] = []

    if (ToUserAiAgent.prompt) {
      messages.push({
        role: 'system',
        content: ToUserAiAgent.prompt,
      })
    }

    const chatCompletion: {
      response?: string
      content: string
      error?: string
      value?: string
    } = await openai.chat.completions
      .create({
        model: 'gpt-4-turbo',
        logprobs: process.env.NODE_ENV === 'development' ? true : undefined,
        top_logprobs: process.env.NODE_ENV === 'development' ? 5 : undefined,
        user: fromUser.id,

        messages: [...messages, chatCompletionMessage],

        tools: [
          {
            type: 'function',
            function: {
              name: 'getLessons',
              description: 'Получает список доступных уроков.',
              parameters: { type: 'object', properties: {} },
            },
          },
          {
            type: 'function',
            function: {
              name: 'getUsers',
              description: 'Получает список зарегистрированных пользователей.',
              parameters: { type: 'object', properties: {} },
            },
          },
          {
            type: 'function',
            function: {
              name: 'getTechnologies',
              description:
                'Получает список технологий, которые изучаются в системе.',
              parameters: { type: 'object', properties: {} },
            },
          },
          {
            type: 'function',
            function: {
              name: 'getTopicAnalysis',
              description: 'Анализирует содержимое статьи на сайте',
              parameters: {
                type: 'object',
                properties: {
                  url: { type: 'string' },
                },
              },
            },
          },
          {
            type: 'function',
            function: {
              name: 'getCodeChellangeSolution',
              description: 'Поиск решения по задаче',
              parameters: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                },
              },
            },
          },
        ],
        // tool_choice: 'auto',
        parallel_tool_calls: true,
      })
      .then(async (response) => {
        console.log('response', response)
        console.log('response.choices[0]', response.choices[0])

        // Это просто части ответа
        // console.log('response.choices[0].logprobs', response.choices[0].logprobs)

        const toolCalls = response.choices[0].message.tool_calls

        console.log('toolCalls', toolCalls)

        if (toolCalls) {
          for (const call of toolCalls) {
            if (call.function.name === 'getLessons') {
              return { content: (await getLessons()).join(', ') }
            }
            if (call.function.name === 'getUsers') {
              return { content: (await getUsers()).join(', ') }
            }
            if (call.function.name === 'getTechnologies') {
              return { content: (await getTechnologies()).join(', ') }
            }
            if (call.function.name === 'getTopicAnalysis') {
              const args: { url?: string } = JSON.parse(call.function.arguments)

              if (!args.url) {
                throw new Error('URL is required')
              }

              return {
                content: await getTopicAnalysis({
                  url: args.url,
                  message,
                  ctx,
                }),
              }
            }
            if (call.function.name === 'getCodeChellangeSolution') {
              const args: { id?: string } = JSON.parse(call.function.arguments)

              if (!args.id) {
                throw new Error('ID is required')
              }

              console.log(
                'getCodeChellangeSolution call',
                call.function.arguments
              )

              return {
                content: await getCodeChellangeSolution({
                  codeChallengeId: args.id,
                  message,
                  ctx,
                }),
              }
            }
          }
        }

        const content = response.choices[0]?.message?.content

        // try {
        //   return JSON.parse(content || '{}') // Автоматически парсим JSON
        // } catch (error) {
        //   // TODO: От сервера не всегда прилетает валидный JSON, поэтому у нас бывает ошибка парсинга
        //   console.error('error', error)

        //   return { content }
        // }

        return { content: content || '' }
      })
      .catch((error) => {
        console.error('error', error)
        throw new Error(
          process.env.NODE_ENV === 'development'
            ? error
            : 'Something went wrong'
        )
      })

    // const response = await ctx.sendMessageToOpenAi(messages)
    const response = chatCompletion

    console.log('openAiResolver response', response, typeof response)

    const responseMessage =
      response.response ?? response.content ?? response.value ?? response.error

    if (!responseMessage) {
      throw new Error('No response')
    }

    reply = await createMessage({
      fromUser: ToUser,
      toUser: { id: fromUser.id },
      message: responseMessage,
      ctx,
    }).then((response) => response.data)
  }

  return {
    success: true,
    message: '',
    errors: [],
    data: chatMessage,
    reply,
  }
}
