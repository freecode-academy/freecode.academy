import { extendType } from 'nexus'
import { aiToolUsersResolver } from './resolvers/usersRaw'

export const AiExtendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('aiToolUsers', {
      type: 'Json',
      args: {
        limit: 'Int',
      },
      resolve: aiToolUsersResolver,
    })
  },
})
