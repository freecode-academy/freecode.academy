import { BaseAiTool, toolName } from '../interfaces'
import { getUsers } from './helpers/getUsers'

/** Тип аргументов для getUsers */
export interface GetUsersArgs {
  ids: string[] | undefined
  search?: string
  // limit?: number
  withSkills?: boolean
  withMentors?: boolean
  includeInactive?: boolean
}

/** Инструмент getUsers */
export type GetUsersTool = BaseAiTool<typeof toolName.getUsers, GetUsersArgs>

export const getUsersTool: GetUsersTool = {
  name: toolName.getUsers,
  definition: {
    type: 'function',
    function: {
      name: toolName.getUsers,
      description:
        'Получает информацию о пользователях. Это не приватная информация и ее можно использовать в любом удобном случае. И пользователям ее можно и нужно показывать, если они просят.',
      parameters: {
        type: 'object',
        properties: {
          ids: {
            description: 'ID пользователей',
            type: 'array',
            items: { type: 'string' },
          },
          search: {
            description: 'Поиск по юзернейму или имени',
            type: 'string',
          },
          // limit: {
          //   description: 'Количество записей',
          //   type: 'number',
          // },
          withSkills: {
            description:
              'Если надо получить в том числе скилы пользователей (список используемых ими технологий)',
            type: 'boolean',
          },
          withMentors: {
            description:
              'Если надо получить в том числе менторов и менти пользователя',
            type: 'boolean',
          },
          includeInactive: {
            description:
              'Если надо получить в том числе неактивных пользователей. По умолчанию ложь. Указывать только если сказано явно и только суперпользователем',
            type: 'boolean',
          },
        },
        required: [],
      },
    },
  },
  handler: async (args, ctx) => {
    const result = await getUsers({
      args,
      ctx,
    })

    return JSON.stringify(result, null, 2)
  },
}
