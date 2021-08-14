import { extendType, inputObjectType, nonNull } from 'nexus'
import { createCommentProcessor } from './resolvers/createCommentProcessor'
import { updateCommentProcessor } from './resolvers/updateCommentProcessor'

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
      resolve: updateCommentProcessor,
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
