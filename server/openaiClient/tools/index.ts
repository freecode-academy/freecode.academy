import { createMindLogTool } from './createMindLog'
import { sendMessageTool } from './sendMessage'
import { getUsersTool } from './getUsers'
import { GetCurrentUserTool } from './GetCurrentUser'
import { summarizeContextTool } from './summarizeContext'
import { updateSystemPromptTool } from './updateSystemPrompt'
import { updateUserTool } from './updateUser'

/**
 * Сборник всех инструментов для OpenAI API
 */
export const tools = {
  [createMindLogTool.name]: createMindLogTool,
  [sendMessageTool.name]: sendMessageTool,
  [getUsersTool.name]: getUsersTool,
  [updateUserTool.name]: updateUserTool,
  [GetCurrentUserTool.name]: GetCurrentUserTool,
  [summarizeContextTool.name]: summarizeContextTool,
  [updateSystemPromptTool.name]: updateSystemPromptTool,
} as const
