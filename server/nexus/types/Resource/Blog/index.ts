import { extendType, inputObjectType, nonNull } from 'nexus'
import { createBlogProcessor } from './resolvers/createBlogProcessor'

export const BlogExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createBlogProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('BlogCreateInput'),
      },
      resolve: createBlogProcessor,
    })
    t.nonNull.field('updateBlogProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('BlogUpdateInput'),
        where: nonNull('ResourceWhereUniqueInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        throw new Error('Not implemented')
      },
    })
  },
})

export const BlogCreateInput = inputObjectType({
  name: 'BlogCreateInput',
  definition(t) {
    t.nonNull.string('name', {
      default: '',
    })
    t.field('content', {
      type: 'JSON',
    })
  },
})

export const BlogUpdateInput = inputObjectType({
  name: 'BlogUpdateInput',
  definition(t) {
    t.nonNull.string('name', {
      default: '',
    })
    t.field('content', {
      type: 'JSON',
    })
  },
})
