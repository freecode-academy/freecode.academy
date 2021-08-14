import { extendType, inputObjectType, nonNull } from 'nexus'
import { createCommentProcessor } from './resolvers/createCommentProcessor'

export const CommentExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createCommentProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('CommentCreateInput'),
      },
      resolve: createCommentProcessor,
    })
    t.nonNull.field('updateCommentProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('CommentUpdateInput'),
        where: nonNull('ResourceWhereUniqueInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        throw new Error('Not implemented')

        // return {
        //   success: false,
        //   message: 'Not implemented',
        //   errors: [],
        // }
      },
    })
  },
})

export const CommentCreateInput = inputObjectType({
  name: 'CommentCreateInput',
  definition(t) {
    // t.field('text', {
    //   type: 'JSON',
    // })
    t.field('content', {
      type: 'JSON',
    })
    t.field('components', {
      type: 'JSON',
    })
    t.id('topicID')
    t.field('Task', {
      type: 'TaskCreateOneWithoutCommentsInput',
    })
  },
})

export const CommentUpdateInput = inputObjectType({
  name: 'CommentUpdateInput',
  definition(t) {
    t.field('content', {
      type: 'JSON',
    })
    t.field('components', {
      type: 'JSON',
    })
  },
})
