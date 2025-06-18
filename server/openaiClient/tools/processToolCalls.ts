import {
  ChatCompletionMessageParam,
  ChatCompletionToolMessageParam,
} from 'openai/resources/chat'
import { handleToolCall } from './handleToolCall'
import { PrismaContext } from '../../nexus/context'
import { ToolCall, User } from '../interfaces'
// import { ToolCall } from '../../../nexus/types/MindLog/helpers/interfaces'
// import { User } from 'server/interfaces'

/**
 * Асинхронная обработка вызовов инструментов OpenAI
 */

type processToolCallsProps = {
  context: PrismaContext
  // agentId: string
  toolCalls: ToolCall[]
  messages: ChatCompletionMessageParam[]
  // userMessagesHistory: ChatCompletionMessageParam[]

  /**
   * Объект пользователя, от имени которого вызывается тулза.
   * По сути это будет пользователь внешнего ИИ-агента
   */
  user: User
}

export async function processToolCalls({
  // agentId,
  user,
  context,
  messages,
  // userMessagesHistory,
  toolCalls,
}: processToolCallsProps) {
  for (const toolCall of toolCalls) {
    const result: ChatCompletionToolMessageParam = await handleToolCall({
      toolCall,
      ctx: context,
      user,
      messages,
    })
      .then((r) => {
        return {
          role: 'tool' as const,
          tool_call_id: toolCall.id,
          content: r ?? '',
        }
      })
      .catch((error) => {
        console.error(error)

        let errorMessage = 'Неизвестная ошибка'

        if (error instanceof Error) {
          errorMessage = error.message || errorMessage

          if (error.stack) {
            errorMessage = errorMessage + `\n\n## Stack ${error.stack}`
          }
        }

        return {
          role: 'tool' as const,
          tool_call_id: toolCall.id,
          content: `Во время выполнения возникла ошибка: ${errorMessage}`,
        }
      })

    messages.push(result)
    // userMessagesHistory.push(result)
  }
}
