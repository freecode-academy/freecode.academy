import { User as PrismaUser } from '@prisma/client'

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

export enum AiAgentUsername {
  // Основной агент, общающийся со всеми пользователями
  // Main = 'ai-main',
  Main = 'ai-main--gpt-4.1-2025-04-14',
  // Админский агент, обрабатывающий большие объемы данных. Сейчас пока будет использоваться и партнерами, и админами
  // AdminAssistent = 'ai-admin-assistent',
  AdminAssistent = 'ai-admin--gpt-4.1-2025-04-14',
}

type AiAgentData<U extends AiAgentUsername> = {
  model: string
  username: U
}

// 🔐 Жёсткая типизация: ключ === username
type AiAgentMap = {
  [U in AiAgentUsername]: AiAgentData<U>
}

// ✅ Правильно типизированный объект
export const AiAgents: AiAgentMap = {
  [AiAgentUsername.Main]: {
    username: AiAgentUsername.Main,

    /**
     * Эта тупит, задваивает сообщения
     */
    // model: 'gpt-4.1-mini-2025-04-14',

    model: 'gpt-4.1-2025-04-14',
  },
  [AiAgentUsername.AdminAssistent]: {
    username: AiAgentUsername.AdminAssistent,

    /**
     * Глупая. JSON режет
     */
    // model: 'gpt-4-0125-preview',

    model: 'gpt-4.1-2025-04-14',
    /**
     * Слишком маленький контекст.
     * Работает медленно, много думает, много телзов вызывает,
     * быстро выдыхается. Но если бы коннекст был больше, то можно было бы поработать.
     */
    // model: 'gpt-4-0613',
  },
}
