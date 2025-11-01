import { extendType, nonNull } from 'nexus'
import { n8nSendAiMessage } from './resolvers/n8nSendAiMessage'

export const N8nExtendsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('n8nSendAiMessage', {
      type: 'JSON',
      args: {
        text: nonNull('String'),
        devMode: 'Boolean',
      },
      resolve: n8nSendAiMessage,
    })
  },
})
