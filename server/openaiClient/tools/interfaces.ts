import {
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from 'openai/resources/chat'
import { PrismaContext } from '../../nexus/context'
import { User } from '../interfaces'

export enum toolName {
  createMindLog = 'createMindLog',
  sendMessage = 'sendMessage',
  getUsers = 'getUsers',
  getUser = 'getUser',
  GetCurrentUser = 'GetCurrentUser',
  getUserMessages = 'getUserMessages',
  summarizeContext = 'summarizeContext',
}

/**
 * Универсальный тип для обработчика инструмента
 * @template T Тип аргументов инструмента
 */
export type ToolHandler<T> = (
  args: T,
  ctx: PrismaContext,
  user: User,
  messages: ChatCompletionMessageParam[]
) => Promise<string | undefined>

/**
 * Базовый интерфейс для всех инструментов
 * @template N Имя инструмента из перечисления toolName
 * @template A Тип аргументов инструмента
 */
export interface BaseAiTool<N extends keyof typeof toolName, A = unknown> {
  /** Имя инструмента из перечисления toolName */
  name: N
  /** Описание инструмента в формате OpenAI ChatCompletionTool */
  definition: ChatCompletionTool & {
    function: ChatCompletionTool['function'] & {
      name: N
      description: string
      parameters: {
        type: string
        properties: Record<keyof A, unknown>
        required: Array<keyof A>
      }
    }
  }
  /** Функция-обработчик вызова инструмента */
  handler: ToolHandler<A>
}
