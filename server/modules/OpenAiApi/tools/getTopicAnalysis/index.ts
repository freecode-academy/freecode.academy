/* eslint-disable no-console */
import { ChatCompletionUserMessageParam } from 'openai/resources'
import { PrismaContext } from 'server/nexus/context'

type getTopicAnalysisProps = {
  url: string
  message: string
  ctx: PrismaContext
}

export async function getTopicAnalysis({
  url,
  message,
  ctx,
}: getTopicAnalysisProps) {
  const { prisma, openai } = ctx

  const topic = await prisma.resource.findFirst({
    where: {
      uri: url,
    },
  })

  const contentText = topic?.contentText

  console.log('contentText', contentText)

  if (!contentText) {
    throw new Error('No content found')
  }

  const chatCompletionMessage: ChatCompletionUserMessageParam = {
    role: 'user',
    content: `${message}`,
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

      messages: [
        {
          role: 'system',
          content: `Анализирую содержимое статьи с текущего сайта. 
        Скорее всего она имеет техническую направленность. Темы в основном по CMS MODX, React, и в целом по веб-программированию.
        В тексте могут встречаться куски кода.
        Надо дать емкую выжимку.
        Запросы на внешние ресурсы не делаются. Ошубку не выдавать. 
        `,
        },
        chatCompletionMessage,
        // {
        //   role: 'user',
        //   content: 'Проанализируй статью',
        // },

        {
          role: 'user',
          content: `Вот ее текст: ${contentText}`,
        },
      ],
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
