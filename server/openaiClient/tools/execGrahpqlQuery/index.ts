import { BaseAiTool, toolName } from '../interfaces'
import { execute, parse } from 'graphql'
import { schema } from '../../../nexus'

export interface GetUsersArgs {
  query: string
  variables?: Record<string, unknown>
}

export type execGrahpqlQuery = BaseAiTool<
  typeof toolName.execGrahpqlQuery,
  GetUsersArgs
>

export const execGrahpqlQueryTool: execGrahpqlQuery = {
  name: toolName.execGrahpqlQuery,
  definition: {
    type: 'function',
    function: {
      name: toolName.execGrahpqlQuery,
      description:
        'Выполняет запрос к локальному АПИ. Можно пользоваться при любом удобном случае. Выполняется от твоего имени, а не от имени пользователя. Вызов от имени пользователя будет реализован чуть позже.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            description: 'gql запрос',
            type: 'string',
          },
          variables: {
            description: 'Объект параметров запроса',
            type: 'object',
          },
        },
        required: ['query'],
      },
    },
  },
  handler: async (args, ctx) => {
    const { query, variables } = args

    let result = execute({
      schema: schema,
      document: parse(query),
      contextValue: ctx,
      variableValues: variables,
    })

    if (result instanceof Promise) {
      result = await result.catch((error) => {
        console.error(error)

        return error
      })
    }

    return !result
      ? 'Не был получен результат'
      : typeof result === 'string'
      ? result
      : JSON.stringify(result, null, 2)
  },
}
