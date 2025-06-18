import { PrismaContext } from 'server/nexus/context'

import { sendOpenAiRequest } from '../../../../openaiClient/processOpenAIRequest'

import { ChatCompletionMessageParam } from 'openai/resources/chat'
import { getSystemPrompt } from '../../../../openaiClient/prompts/systemPrompt'
import { ChatMessage, User } from '@prisma/client'
import { AiAgentUserData } from '../../../../openaiClient/interfaces'

/**
 * Временное решение для сохранения текущей истории сообщений между пользователями и ИИ
 */
export const messagesHistory = new Map<string, ChatCompletionMessageParam[]>()

type sendAiMessageProps = {
  ctx: PrismaContext
  messages: ChatCompletionMessageParam[]
  withHistory: boolean
  fromUser: User
  toUser: User
}

export const sendAiMessage = async ({
  ctx,
  messages: messagesProps,
  withHistory,
  fromUser,
  toUser,
}: sendAiMessageProps): Promise<ChatMessage | null> => {
  const historyKey = [fromUser.id, toUser.id].join(',')

  // const userMessagesHistory =
  //   (withHistory && messagesHistory.get(historyKey)) || []

  // if (!messagesHistory.has(historyKey) && withHistory) {
  //   messagesHistory.set(historyKey, userMessagesHistory)
  // }

  const aiUserData = toUser.data as AiAgentUserData | undefined

  const messages = (withHistory && messagesHistory.get(historyKey)) || []

  if (!messagesHistory.has(historyKey) && withHistory) {
    messagesHistory.set(historyKey, messages)
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('sendMessage messagesHistory.size', messagesHistory.size)
  }

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('sendMessage userMessagesHistory.length', messages.length)
  }

  // let messages: ChatCompletionMessageParam[] = []

  const systemPrompt = aiUserData?.systemPrompt || getSystemPrompt()

  if (systemPrompt) {
    const firstMessage = messages.at(0)

    if (firstMessage?.role !== 'system') {
      messages.unshift({ role: 'system', content: systemPrompt })
    } else {
      firstMessage.content = systemPrompt
    }
  }

  messages.push({
    role: 'system',
    content: `ID пользователя (userId): ${fromUser.id}`,
  })

  // if (userMessagesHistory.length) {
  //   messages = [...messages, ...userMessagesHistory]
  // }

  messages.push(...messagesProps)

  // userMessagesHistory.push(...messagesProps)

  const aiAgentResponse = await sendOpenAiRequest({
    ctx,
    fromUser,
    toUser,
    messages,
    // userMessagesHistory,
    // model,
  })

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('messages', messages)
  }

  // return response.sendMessage.reply?.text ?? null
  return aiAgentResponse ?? null
}
