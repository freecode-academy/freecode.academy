import { createMindLogTool } from './createMindLog'
import { sendMessageTool } from './sendMessage'
import { getUserTool } from './getUser'
import { GetCurrentUserTool } from './GetCurrentUser'

/**
 * Сборник всех инструментов для OpenAI API
 */
export const tools = {
  [createMindLogTool.name]: createMindLogTool,
  [sendMessageTool.name]: sendMessageTool,
  [getUserTool.name]: getUserTool,
  [GetCurrentUserTool.name]: GetCurrentUserTool,
} as const
