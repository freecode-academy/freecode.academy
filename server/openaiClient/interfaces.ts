import { User as PrismaUser } from '@prisma/client'

export type AiAgentUserData = {
  model: string
  endpoint: string
  systemPrompt?: string
}

export type User = PrismaUser

interface ToolCallFunction {
  name: string
  arguments: string
}

export interface ToolCall {
  id: string
  type: 'function'
  function: ToolCallFunction
}

type AiAgentData = {
  username: string
  model: string
}

// ✅ Правильно типизированный объект
export const AiAgents: AiAgentData[] = [
  {
    username: 'ai-admin--gpt-4.1-2025-04-14',
    /**
     * Эта тупит, задваивает сообщения
     */
    // model: 'gpt-4.1-mini-2025-04-14',

    model: 'gpt-4.1-2025-04-14',
  },
]
