import { execute, parse } from 'graphql'
import { FieldResolver } from 'nexus'
import { schema } from '../../..'

export const aiToolUsersResolver: FieldResolver<
  'Query',
  'aiToolUsers'
> = async (_, args, ctx) => {
  const { limit } = args

  const query = `query users($where: UserWhereInput, $limit: Int) {
  usersCount(where: $where)

  users(take: $limit, where: $where, orderBy: { updatedAt: desc }) {
    id
    fullname
    username
    technologyLevel
    about
    UserTechnologies {
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

  const result = await execute({
    schema: schema,
    document: parse(query),
    contextValue: ctx,
    variableValues: {
      where: {
        UserTechnologies: {
          some: {
            NOT: null,
          },
        },
      },
      limit,
    },
  })

  return result
}
