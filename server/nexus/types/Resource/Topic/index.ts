import { extendType, inputObjectType, nonNull } from 'nexus'
import { createTopicProcessor } from './resolvers/createTopicProcessor'
import { updateTopicProcessor } from './resolvers/updateTopicProcessor'

export const TopicExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTopicProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('TopicCreateInput'),
      },
      resolve: createTopicProcessor,
    })
    t.nonNull.field('updateTopicProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('TopicUpdateInput'),
        where: nonNull('ResourceWhereUniqueInput'),
      },
      resolve: updateTopicProcessor,
    })
  },
})

export const TaskCreateOneWithoutCommentsInput = inputObjectType({
  name: 'TaskCreateOneWithoutCommentsInput',
  definition(t) {
    t.field('connect', {
      type: 'TaskWhereUniqueInput',
    })
  },
})

export const TopicCreateInput = inputObjectType({
  name: 'TopicCreateInput',
  definition(t) {
    t.id('id')
    t.string('name', {
      default: '',
    })
    // t.string('longtitle')
    // t.field('content', {
    //   type: 'JSON',
    // })
    t.field('components', {
      type: 'JSON',
    })
    // t.boolean('published')
    // t.list.nonNull.string('topic_tags')
    t.id('blogID')
    t.field('CodeChallenge', {
      type: 'CodeChallengeCreateOneWithoutTopicInput',
    })
    t.string('uri')
  },
})

export const TopicUpdateInput = inputObjectType({
  name: 'TopicUpdateInput',
  definition(t) {
    t.string('name')
    t.string('longtitle')
    t.field('content', {
      type: 'JSON',
    })
    t.field('components', {
      type: 'JSON',
    })
    // t.boolean('published')
    // t.id('blogID')
  },
})

export const CodeChallengeCreateOneWithoutTopicInput = inputObjectType({
  name: 'CodeChallengeCreateOneWithoutTopicInput',
  definition(t) {
    t.field('connect', {
      type: 'CodeChallengeWhereUniqueInput',
    })
  },
})
