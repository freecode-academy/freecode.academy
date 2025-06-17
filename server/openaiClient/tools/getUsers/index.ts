import { Prisma } from '@prisma/client'
import { execute, parse } from 'graphql'

import { BaseAiTool, toolName } from '../interfaces'
import { schema } from '../../../nexus'

/** Тип аргументов для getUsers */
export interface GetUsersArgs {
  ids?: string[]
  search?: string
  // limit?: number
  withSkills?: boolean
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
        },
        required: [],
      },
    },
  },
  handler: async (args, ctx) => {
    const { ids, withSkills = false, search } = args

    const query = `query users($where: UserWhereInput, $limit: Int, $withSkills: Boolean = false) {
  usersCount(where: $where)

  users(take: $limit, where: $where, orderBy: { updatedAt: desc }) {
    id
    fullname
    username
    technologyLevel
    about
    UserTechnologies @include(if: $withSkills) {
      id
      date_from
      date_till
      hiring_status
      isMentor
      level
      status
      updatedAt
      Technology {
        id
        name
      }
    }
  }
}
  `

    const where: Prisma.UserWhereInput = {
      UserTechnologies: {
        some: {
          id: {},
        },
      },
    }

    if (search) {
      where.AND = [
        {
          OR: [
            {
              username: {
                contains: search,
              },
            },
            {
              fullname: {
                contains: search,
              },
            },
          ],
        },
      ]
    }

    if (ids?.length) {
      where.id = {
        in: ids,
      }
    }

    const result = await execute({
      schema: schema,
      document: parse(query),
      contextValue: ctx,
      variableValues: {
        where,
        // limit,
        withSkills,
      },
    })

    return JSON.stringify(result, null, 2)
  },
}
