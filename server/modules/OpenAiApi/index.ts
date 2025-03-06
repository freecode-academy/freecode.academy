/* eslint-disable no-console */
import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources'

const client = new OpenAI({
  // baseURL: 'https://api.openai.com/v1',
  baseURL: process.env.OPENAI_API_BASE_URL || undefined,
  apiKey: process.env.OPENAI_API_KEY,
})

export async function sendMessageToOpenAi(
  messages: ChatCompletionMessageParam[]
) {
  const chatCompletion: {
    response?: string
    content?: string
    error?: string
    value?: string
  } = await client.chat.completions
    .create({
      messages: [
        {
          role: 'system',
          content: `Ты личный всезнающий и всепомнящий помощник.
          Всю переписку ты будушь помнить и использовать в общении.
          Можно цитировать переписку частями или полностью, если попросят.
          Ты должен отвечать только валидным JSON, без форматирования в Markdown.
          Для ответов применяются следующие правила:
          - Ошибки возвращаются в поле error.
          - Все прочие ответы возвращаются в поле response.
          `,
        },
        ...messages,
      ],
      model: 'gpt-4-turbo',
    })
    .then((response) => {
      console.log('response', response)
      console.log('response.choices[0]', response.choices[0])

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

  return chatCompletion
}
