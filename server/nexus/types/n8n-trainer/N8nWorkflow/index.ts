import { extendType, objectType } from 'nexus'
import { n8nWorkflowsResolver } from './resolvers/n8nWorkflows'

export const N8nWorkflow = objectType({
  name: 'N8nWorkflow',
  definition(t) {
    // t.nonNull.id('id')
    t.nonNull.id('key')
    t.nonNull.string('name')
    t.nonNull.string('description')
    t.nonNull.string('content')
  },
})

export const N8nWorkflowExtendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('n8nWorkflows', {
      type: 'N8nWorkflow',
      resolve: n8nWorkflowsResolver,
    })
  },
})
