import { BaseAiTool, toolName } from '../interfaces'
import { formatUserData } from './helpers/formatUserData'

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
  handler: async (_args, ctx) => {
    const { currentUser } = ctx

    if (!currentUser) {
      throw new Error('Не были получены данные текущего пользователя')
    }

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('GetCurrentUserTool currentUser', currentUser)
    }

    return JSON.stringify(formatUserData({ user: currentUser }), null, 2)
  },
}
