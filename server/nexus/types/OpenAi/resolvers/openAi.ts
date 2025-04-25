/* eslint-disable no-console */
import { FieldResolver } from 'nexus'
import {
  // ChatCompletionMessageParam,
  ChatCompletionUserMessageParam,
} from 'openai/resources'

// Имитируем БД-запросы (замени на реальные SQL-запросы или API-вызовы)
async function getLessons() {
  return [
    'Урок 1: Введение в React',
    'Урок 2: Основы TypeScript',
    'Урок 3: GraphQL API',
  ]
}

async function getUsers() {
  return ['Алиса', 'Борис', 'Виктор']
}

async function getTechnologies() {
  return ['React', 'Node.js', 'GraphQL']
}

export const openAiResolver: FieldResolver<'Mutation', 'openAi'> = async (
  _root,
  { query },
  ctx
) => {
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('Not implemented')
  }

  const { currentUser, openai } = ctx

  if (!currentUser) {
    throw new Error('Not authenticated')
  }

  const message: ChatCompletionUserMessageParam = {
    role: 'user',
    content: query,
  }

  // await ctx.prisma.aiMessage.create({
  //   data: {
  //     content: query,
  //     role: 'user',
  //     CreatedBy: {
  //       connect: {
  //         id: currentUser.id,
  //       },
  //     },
  //   },
  // })

  // const messages: ChatCompletionMessageParam[] = (
  //   await ctx.prisma.aiMessage.findMany({
  //     where: {
  //       CreatedBy: {
  //         id: currentUser.id,
  //       },
  //     },
  //     orderBy: {
  //       createdAt: 'asc',
  //     },
  //   })
  // ).map((n) => ({
  //   role: n.role === 'user' ? 'user' : 'assistant',
  //   content: n.content,
  // }))

  //   Ты — интеллектуальный помощник с доступом к инструментам для работы с уроками, пользователями и технологиями.

  // 📌 **Правила использования инструментов**:
  // 1. Используй `tools`, **только если запрос явно требует их вызова**.
  // 2. Если ты можешь ответить сам (например, общий вопрос или обсуждение), **не вызывай `tools`**.
  // 3. Если запрос неоднозначный, **сначала уточни у пользователя**, прежде чем использовать `tools`.

  // 📌 **Выбор инструментов**:
  // - Если пользователь спрашивает о доступных уроках, используй `getLessons()`.
  // - Если пользователь хочет список пользователей, используй `getUsers()`.
  // - Если пользователь спрашивает о технологиях, используй `getTechnologies()`.
  // - Если запрос не относится к этим категориям, **просто отвечай текстом**.

  // 📌 **Примеры корректного поведения**:
  // ✅ **"Покажи мне список уроков"** → Вызвать `getLessons()`.
  // ✅ **"Какие технологии вы поддерживаете?"** → Вызвать `getTechnologies()`.
  // ✅ **"Как работает JavaScript?"** → Просто ответить текстом, без вызова `tools`.
  // ✅ **"А у вас есть уроки по React?"** → Уточнить у пользователя, нужен ли список всех уроков.
  // ✅ **"Привет, расскажи шутку"** → Просто рассказать шутку, `tools` не нужны.

  // Запомни: **не вызывай инструменты без необходимости!**

  const chatCompletion: {
    response?: string
    content?: string
    error?: string
    value?: string
  } = await openai.chat.completions
    .create({
      model: 'gpt-4-turbo',
      // modalities: ['text'],
      logprobs: process.env.NODE_ENV === 'development' ? true : undefined,
      top_logprobs: process.env.NODE_ENV === 'development' ? 5 : undefined,
      user: currentUser.id,

      messages: [
        {
          role: 'system',
          content: `Ты личный всезнающий и всепомнящий помощник.
          Всю переписку ты будушь помнить и использовать в общении.
          Можно цитировать переписку частями или полностью, если попросят.

          **Правила использования инструментов**:
          По сообщению пользователя нужно определить, что он хочет узнать. Если какие-то имеющиеся функции подходят под запрос, их нужно использовать, и только те, что необходимы.
          Если пользователь спрашивает что он может узнать, можно просто дать ему список описаний имеющихся функций.
          Если его вопросы никак не относятся к нашим функциям, никак их не используем.
          Если ты можешь ответить сам (например, общий вопрос или обсуждение), **не вызывай 'tools'**

          **Правила формирования ответов**
          Для ответов применяются следующие правила:
          - Ошибки возвращаются в поле error.
          - Все прочие ответы возвращаются в поле response.
          ${
            process.env.NODE_ENV === 'development'
              ? `Объясняй ход своих мыслей перед тем, как дать ответ. Свои размышления добавляй в объект овтета в поле think`
              : ''
          }


          Ты должен отвечать только валидным JSON, без форматирования в Markdown.
          `,
        },
        // TODO Restore
        // ...messages,

        message,
      ],

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
      ],
      // tool_choice: 'auto',
      // Это заставит OpenAI отвечать текстом, если tool не нужен.
      // tool_choice: 'required',

      // query: "Что я могу у тебя узнать?"
      /**
       * "think": "Для получения полной картины текущей обстановки с системой учёбы, мне нужно получить одновременно информацию о доступных уроках, зарегистрированных пользователях и изучаемых технологиях. Воспользуюсь инструментом multi_tool_use.parallel для одновременного вызова необходимых функций.",\n' +
      '  "response": "Отправляю запросы для получения данных.

        Тут интересное: судя по всему агент хочет запросить все тулзы одновременно, чтобы дать всю картину разом. Может быть полезно.
       */
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
        const toolsResult: Record<string, string[]> = {}

        for (const call of toolCalls) {
          if (call.function.name === 'getLessons') {
            console.log('getLessons === proto', call.function === getLessons)
            toolsResult.lessons = await getLessons()
          }
          if (call.function.name === 'getUsers') {
            console.log('getUsers === proto', call.function === getUsers)
            toolsResult.users = await getUsers()
          }
          toolsResult
          if (call.function.name === 'getTechnologies') {
            console.log(
              'getTechnologies === proto',
              call.function === getTechnologies
            )
            toolsResult.technologies = await getTechnologies()
          }

          // Отправляем результат обратно в OpenAI для завершения ответа
          // const secondResponse = await openai.chat.completions.create({
          //   model: 'gpt-4-turbo',
          //   messages: [
          //     { role: 'user', content: userMessage },
          //     {
          //       role: 'assistant',
          //       content: null,
          //       tool_calls: response.choices[0].message.tool_calls,
          //     },
          //     {
          //       role: 'tool',
          //       tool_call_id: call.id,
          //       name: call.function.name,
          //       content: JSON.stringify(result),
          //     },
          //   ],
          // })

          // return secondResponse.choices[0].message.content
        }
        console.log('toolsResult', toolsResult)

        return toolsResult
      }

      const content = response.choices[0]?.message?.content

      try {
        return JSON.parse(content || '{}') // Автоматически парсим JSON
      } catch (error) {
        // TODO: От сервера не всегда прилетает валидный JSON, поэтому у нас бывает ошибка парсинга
        console.error('error', error)

        return { content }
      }
    })
    .catch((error) => {
      console.error('error', error)
      throw new Error(
        process.env.NODE_ENV === 'development' ? error : 'Something went wrong'
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

  // await ctx.prisma.aiMessage.create({
  //   data: {
  //     content: responseMessage.toString(),
  //     role: 'assistant',
  //     CreatedBy: {
  //       connect: {
  //         id: currentUser.id,
  //       },
  //     },
  //   },
  // })

  return responseMessage
}
