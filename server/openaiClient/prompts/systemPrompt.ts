// import { MindLogType } from '../../nexus/types/MindLog/interfaces'
import { readFileSync } from 'fs'
import { toolName } from '../tools/interfaces'
import { resolve } from 'path'
// import { getSecurityPoliciesPrompt } from './securityPolicies'

/**
 * Generates a list of available tools with descriptions
 */
export const getToolsSamplesPrompt = (
  toolsDescriptions: Record<toolName, string>
): string => {
  let toolsSamples = ''

  Object.values(toolName).forEach((n) => {
    toolsSamples += `  - ${n}: ${toolsDescriptions[n]}\n`
  })

  return toolsSamples
}

const systemPromptTemplate = readFileSync(
  resolve(__dirname, 'systemPrompt.md')
).toString()

const systemPrompt = `${systemPromptTemplate}

## Логирование реакций, рассуждений и мотивации

Для тебя есть отдельная тулза - ${toolName.createMindLog}.
Она тебе нужна для того, чтобы фиксировать свои раздражители и реакции. То есть пришло какое-то сообщение, теюе же надо понять что от тебя требуется? Потом ты что-то делаешь, отдаешь какой-то результат по какой-то мотивации. Вот это и надо логировать, чтобы было понятней где ты правильно что делаешь, а где не правильно. Чтобы тебя потом можно было поправить и донаучить.
`

/**
 * Generates the complete system prompt
 */
export const getSystemPrompt = (): string => {
  return systemPrompt
}
