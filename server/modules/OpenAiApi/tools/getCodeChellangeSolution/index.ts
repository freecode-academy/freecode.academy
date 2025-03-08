/* eslint-disable no-console */
import {
  ChatCompletionMessageParam,
  ChatCompletionUserMessageParam,
} from 'openai/resources'
import { PrismaContext } from 'server/nexus/context'

type getTopicAnalysisProps = {
  codeChallengeId: string
  message: string
  ctx: PrismaContext
}

/**
 * Ищем решение для задачи
 */
export async function getCodeChellangeSolution({
  codeChallengeId,
  message,
  ctx,
}: getTopicAnalysisProps) {
  const { prisma, openai } = ctx

  const codeChallenge = await prisma.codeChallenge.findFirst({
    where: {
      id: codeChallengeId,
    },
    include: {
      CodeChallengeCompletions: {
        where: {
          success: true,
        },
      },
    },
  })

  console.log('codeChallenge', codeChallenge)

  if (!codeChallenge) {
    throw new Error('No codeChallenge found')
  }

  const { name, description, instructions, CodeChallengeCompletions } =
    codeChallenge

  const chatCompletionMessage: ChatCompletionUserMessageParam = {
    role: 'user',
    content: `${message}`,
  }

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `Я помогаю с решением задач по программированию.
      В ответ даю краткое резюме по задаче.
      В так же полное решение этой задачи в виде готового кода.
      Если есть более одного варианта решения, то показываю не более 3 наиболее интересных и разных.
    `,
    },
    chatCompletionMessage,
    // {
    //   role: 'user',
    //   content: 'Проанализируй статью',
    // },

    // {
    //   role: 'user',
    //   content: `Вот ее текст: ${contentText}`,
    // },
    {
      role: 'user',
      content: `Вот сама задача: ${name}
      
      Описание: ${description}

      Инструкция: ${instructions}
      `,
    },
  ]

  if (CodeChallengeCompletions.length) {
    messages.push({
      role: 'user',
      content: `А вот успешные решения этой задачи:
      
        ${CodeChallengeCompletions.map(
          (completion, index) => `
          Решение ${index}: ${completion.content}
          `
        ).join('\n\n\n')} 
      `,
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

      messages,
    })
    .then(async (response) => {
      console.log('response', response)
      console.log('response.choices[0]', response.choices[0])

      const toolCalls = response.choices[0].message.tool_calls

      console.log('toolCalls', toolCalls)

      const content = response.choices[0]?.message?.content

      return { content: content || '' }
    })
    .catch((error) => {
      console.error('error', error)
      throw new Error(
        process.env.NODE_ENV === 'development' ? error : 'Something went wrong'
      )
    })

  const response = chatCompletion

  console.log('openAiResolver response', response, typeof response)

  const responseMessage =
    response.response ?? response.content ?? response.value ?? response.error

  if (!responseMessage) {
    throw new Error('No response')
  }

  return responseMessage
}
