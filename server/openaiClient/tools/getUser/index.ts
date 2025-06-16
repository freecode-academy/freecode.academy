import { BaseAiTool, toolName } from '../interfaces'

/** Тип аргументов для getUser */
export interface GetUserArgs {
  id: string
}

/** Инструмент getUser */
export type GetUserTool = BaseAiTool<typeof toolName.getUser, GetUserArgs>

export const getUserTool: GetUserTool = {
  name: toolName.getUser,
  definition: {
    type: 'function',
    function: {
      name: toolName.getUser,
      description: 'Получает информацию по пользователю',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID пользователя',
          },
        },
        required: ['id'],
      },
    },
  },
  handler: async (args, ctx) => {
    const { prisma } = ctx

    const { id } = args

    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return `Пользователь не найден`
      }

      return JSON.stringify(user, null, 2)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error)
      return `Ошибка при получении пользователей: ${errorMessage}`
    }
  },
}
