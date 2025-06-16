import { ChatCompletionMessageParam } from 'openai/resources/chat'
import { PrismaContext } from '../../nexus/context'
import { tools } from '../tools'
import { processToolCalls } from '../tools/processToolCalls'

import { User } from '../interfaces'
import { openaiClient } from '..'
import { createMessage } from '../../nexus/types/ChatMessage/helpers/createMessage'
import { ChatMessage } from '@prisma/client'

const openAiTools = Object.values(tools).map((n) => n.definition)

/**
 * Интерфейс для результата запроса к OpenAI
 */
export interface OpenAIRequestResponse {
  message: string
  quality: number
  history?: ChatCompletionMessageParam[] // Добавляем историю для отладки
}

type sendOpenAiRequestProps = {
  ctx: PrismaContext
  messages: ChatCompletionMessageParam[]

  fromUser: User
  toUser: User

  userMessagesHistory: ChatCompletionMessageParam[]
}

export async function sendOpenAiRequest({
  ctx,
  fromUser,
  toUser,
  messages,
  userMessagesHistory,
}: sendOpenAiRequestProps): Promise<ChatMessage | undefined> {
  let model: string | undefined = undefined

  if (
    toUser.data &&
    typeof toUser.data === 'object' &&
    'model' in toUser.data &&
    typeof toUser.data.model === 'string'
  ) {
    model = toUser.data.model
  }

  if (!model) {
    throw new Error('model is empty')
  }

  try {
    // Отправляем запрос к OpenAI
    const completion = await openaiClient.chat.completions.create({
      model,
      messages,
      // temperature: 1,
      /**
       * Здесь можно сделать динамический набор тулзов
       */
      tools: openAiTools,
      tool_choice: 'auto',
      parallel_tool_calls: false,
    })

    const responseMessage = completion.choices[0].message

    // Обрабатываем инструменты, если они есть
    if (responseMessage.tool_calls && responseMessage.tool_calls.length > 0) {
      /**
       * Перед вызовом тулзов надо добавить ответ ИИхи в историю сообщений
       */
      messages.push(responseMessage)
      userMessagesHistory.push(responseMessage)

      // TODO Возможно тут вообзе надо убрать await,
      // так как вероятнее всего выполнение будет последовательное
      await processToolCalls({
        context: ctx,
        user: toUser,
        toolCalls: responseMessage.tool_calls,
        messages,
        userMessagesHistory,
      })

      return sendOpenAiRequest({
        ctx,
        messages,
        fromUser,
        toUser,
        userMessagesHistory,
      })
    }

    const content = responseMessage.content || undefined

    /**
     * Записываем именно здесь, пропуская тулзы, потому что история с тулзами требует ответов
     * по всем тулзам. Отсутствие приводит к ошибкам
     */
    if (responseMessage.content) {
      userMessagesHistory.push(responseMessage)
    }

    if (content) {
      return await createMessage({
        ctx,
        text: content,
        /**
         * Тут меняем отправителя и получателя, так как ответ идет от агента к пользователю
         */
        fromUser: toUser,
        toUser: fromUser,
      })
    }

    return undefined
  } catch (error) {
    console.error(error)

    const errorMessage = error instanceof Error ? error.message : String(error)

    throw new Error(`Произошла ошибка при обработке: ${errorMessage}`)
  }
}
