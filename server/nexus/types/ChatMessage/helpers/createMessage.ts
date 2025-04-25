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
import { createUser } from '../../User/resolvers/helpers/createUser'
import { AiChatTools } from './interfaces'

type createMessageProps = {
  fromUser: User | null | undefined
  toUser: Prisma.UserWhereUniqueInput | null | undefined
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

  let createdUser: NexusGenAllTypes['AuthPayload'] | undefined = undefined

  if (!message) {
    throw new Error('Message is required')
  }

  if (!fromUser) {
    if (!ctx.currentUser) {
      createdUser = await createUser({}, ctx)

      if (createdUser.data) {
        fromUser = createdUser.data
      }
    }
  }

  if (!fromUser && !toUser) {
    throw new Error('User is required')
  }

  const { prisma, openai } = ctx

  const FromUserAiAgent = fromUser
    ? await prisma.aiAgent.findFirst({
        where: {
          User: {
            id: fromUser.id,
          },
        },
      })
    : undefined

  const ToUserAiAgent = toUser
    ? await prisma.aiAgent.findFirst({
        where: {
          User: {
            id: toUser.id,
          },
        },
      })
    : undefined

  const toUserWgere = toUser as Prisma.UserWhereUniqueInput | null | undefined

  const ToUser = toUserWgere
    ? await prisma.user.findUnique({
        where: toUserWgere,
      })
    : undefined

  // if (!ToUser) {
  //   throw new Error('User not found')
  // }

  // if (fromUser.id === ToUser.id) {
  //   throw new Error('You can not send message to yourself')
  // }

  if (FromUserAiAgent && ToUserAiAgent) {
    throw new Error('AI agent can not send message to AI agent')
  }

  const data: Prisma.ChatMessageCreateInput = {
    contentText: message,
  }

  if (ToUser) {
    data.ToUser = {
      connect: {
        id: ToUser.id,
      },
    }
  }

  if (fromUser) {
    data.User = {
      connect: {
        id: fromUser.id,
      },
    }
  }

  const chatMessage = await prisma.chatMessage.create({
    data,
  })

  /**
   * Если это AI агент, то нужно отправить сообщение на обработку
   * и вернуть ответ
   */
  if (ToUserAiAgent) {
    /**
     * Сначала отмечаем сообщение прочтенным
     */
    ToUser &&
      (await prisma.chatMessageReaded.create({
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
      }))

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

    const prompt = `${ToUserAiAgent.prompt ?? ''}

У нас на сайте вводится новый функцирнал - ИИ чат. Пользователи не знали об этом.
Они могут прийти и не найти нужный им функционал. Поприветствуй и расскажи, что мы очень хотим сделать сайт более удобным для них, что практически все они в будущем смогут узнать и сделать через чат. Но сейчас пока многого тут нету. Поэтому пусть расскажут что они хотели бы тут видеть и в каком виде.
    `

    messages.push({
      role: 'system',
      content: prompt,
    })

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
        user: fromUser?.id,

        messages: [...messages, chatCompletionMessage],

        tools: [
          {
            type: 'function',
            function: {
              name: AiChatTools.getMenu,
              description:
                'Получает ссылки на основные разделы сайта. Показываем только если пользователь хочет найти что-то конкретное или просит дать меню сайта.',
              parameters: { type: 'object', properties: {} },
            },
          },
          // {
          //   type: 'function',
          //   function: {
          //     name: 'getLessons',
          //     description: 'Получает список доступных уроков.',
          //     parameters: { type: 'object', properties: {} },
          //   },
          // },
          // {
          //   type: 'function',
          //   function: {
          //     name: 'getUsers',
          //     description: 'Получает список зарегистрированных пользователей.',
          //     parameters: { type: 'object', properties: {} },
          //   },
          // },
          // {
          //   type: 'function',
          //   function: {
          //     name: 'getTechnologies',
          //     description:
          //       'Получает список технологий, которые изучаются в системе.',
          //     parameters: { type: 'object', properties: {} },
          //   },
          // },
          // {
          //   type: 'function',
          //   function: {
          //     name: 'getTopicAnalysis',
          //     description: 'Анализирует содержимое статьи на сайте',
          //     parameters: {
          //       type: 'object',
          //       properties: {
          //         url: { type: 'string' },
          //       },
          //     },
          //   },
          // },
          // {
          //   type: 'function',
          //   function: {
          //     name: 'getCodeChellangeSolution',
          //     description: 'Поиск решения по задаче',
          //     parameters: {
          //       type: 'object',
          //       properties: {
          //         id: { type: 'string' },
          //       },
          //     },
          //   },
          // },
        ],
        // tool_choice: 'auto',
        parallel_tool_calls: true,
      })
      .then(async (response) => {
        // Это просто части ответа
        // console.log('response.choices[0].logprobs', response.choices[0].logprobs)

        const toolCalls = response.choices[0].message.tool_calls

        if (toolCalls) {
          for (const call of toolCalls) {
            if (call.function.name === AiChatTools.getMenu) {
              return {
                content: `## Основное меню сайта

- [Главная](/) - Домашняя страница FreeCode.Academy
- [Стратегии обучения](/learnstrategies/) - Эффективные методики изучения программирования
- [Уроки](/learn/sections) - Учебные материалы и курсы
- [Технологии](/technologies/) - Обзор технологий и инструментов
- [Участники](/people/) - Сообщество разработчиков
- [Проекты](/projects/) - Проекты для практики
- [Топики](/topics/) - Обсуждения и статьи по темам
- [Блоги](/blogs/) - Блоги разработчиков
- [Офис](/office/) - Рабочее пространство
- [О проекте](/about/) - Информация о FreeCode.Academy
- [Наш Телеграм](https://t.me/freecode_academy) - Присоединяйтесь к сообществу
`,
              }
            }
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

    const responseMessage =
      response.response ?? response.content ?? response.value ?? response.error

    if (!responseMessage) {
      throw new Error('No response')
    }

    reply = await createMessage({
      fromUser: ToUser,
      toUser: fromUser ? { id: fromUser.id } : undefined,
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
    createdUser,
  }
}
