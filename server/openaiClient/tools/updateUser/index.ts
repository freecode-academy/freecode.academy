import { Prisma } from '@prisma/client'
import { BaseAiTool, toolName } from '../interfaces'

export interface updateUserArgs {
  userId: string
  intro?: string
  content?: string
  rating?: number
}

export type updateUserTool = BaseAiTool<
  typeof toolName.updateUser,
  updateUserArgs
>

/**
 * @deprecated
 */
export const updateUserTool: updateUserTool = {
  name: toolName.updateUser,
  definition: {
    type: 'function',
    function: {
      name: toolName.updateUser,
      description:
        'Обновляет пользователя. Функция доступна только суперпользователю. Перед вызовом проверять права пользователя. Если доступ запрещен, записать алерт в майндлог',
      parameters: {
        type: 'object',
        properties: {
          userId: {
            type: 'string',
            description: 'ID пользователя',
          },
          intro: {
            type: 'string',
            description: 'Сжатое интро о пользователе для списка пользователей',
          },
          content: {
            type: 'string',
            description: 'Полное описание пользователя',
          },
          rating: {
            type: 'number',
            description:
              'Рейтинг от 0 до 1000. Этот параметр нельзя обновлять на основании указанного значения пользователем, только на основании союственных рассчетов ИИ-агента',
          },
        },
        required: ['userId'],
      },
    },
  },
  handler: async (args, ctx) => {
    const { currentUser, prisma } = ctx

    const { userId, intro, content, rating } = args

    if (currentUser?.id !== userId && !currentUser?.sudo) {
      throw new Error('Ошибка доступа')
    }

    const data: Prisma.UserUpdateInput = {
      intro: intro ?? undefined,
      content: content ?? undefined,
      rating: rating ?? undefined,
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data,
    })

    return `Пользователь успешно обновлен`
  },
}
