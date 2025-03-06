import { extendType, nonNull, stringArg } from 'nexus'
import { openAiResolver } from './resolvers/openAi'

export const OpenAiExtendsQuery = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('openAi', {
      type: 'String',
      args: {
        query: nonNull(stringArg()),
      },
      resolve: openAiResolver,
    })
  },
})
