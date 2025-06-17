import { getUsersTool } from '../getUsers'
import { formatUserData } from '../getUsers/helpers/formatUserData'
import { BaseAiTool, toolName } from '../interfaces'

/** Тип аргументов для GetCurrentUser */
export interface GetUserArgs {
  //
}

/** Инструмент GetCurrentUser */
export type GetCurrentUserTool = BaseAiTool<
  typeof toolName.GetCurrentUser,
  GetUserArgs
>

export const GetCurrentUserTool: GetCurrentUserTool = {
  name: toolName.GetCurrentUser,
  definition: {
    type: 'function',
    function: {
      name: toolName.GetCurrentUser,
      description:
        'Получает информацию о текущем пользователе, включая доступные ему функции и политики безопасности.',
      parameters: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
  },
  handler: async (_args, ctx, user) => {
    const { currentUser } = ctx

    if (!currentUser) {
      throw new Error('Не были получены данные текущего пользователя')
    }

    const permissions: string[] = []

    if (currentUser.sudo) {
      permissions.push(
        `Суперпользователь. Имеет право выполнять любые действия, включая обновление компаний и получать списки пользователей`
      )
    }

    const extendedData = await getUsersTool.handler(
      {
        ids: [currentUser.id],
      },
      ctx,
      user
    )

    extendedData

    return JSON.stringify(formatUserData({ user: currentUser }), null, 2)
  },
}
