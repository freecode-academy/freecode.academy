import { Prisma } from '@prisma/client'
import {
  enumType,
  extendType,
  inputObjectType,
  nonNull,
  objectType,
} from 'nexus'
import { createTopicProcessor } from './resolvers/createTopicProcessor'

export const ResourceExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.resource({})
    t.crud.resources({
      filtering: true,
      ordering: true,
    })

    t.nonNull.field('resourcesConnection', {
      type: 'ResourceConnection',
      args: {
        where: 'ResourceWhereInput',
        orderBy: 'ResourceOrderByInput',
        first: 'Int',
        skip: 'Int',
      },
      resolve: async (_, args, ctx) => {
        const where = args.where as Prisma.ResourceWhereInput
        const orderBy = args.orderBy as Prisma.ResourceOrderByInput
        const take = args.first || undefined
        const skip = args.skip || undefined

        const countPromise = ctx.prisma.resource.count({
          where,
        })

        const resourcesPromise = ctx.prisma.resource.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
          take,
          skip,
        })

        return Promise.all([countPromise, resourcesPromise]).then((results) => {
          return {
            aggregate: {
              count: results[0],
            },
            edges: results[1].map((n) => {
              return {
                node: n,
              }
            }),
          }
        })
      },
    })
  },
})

export const CommentExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createCommentProcessor', {
      type: 'ResourceResponse',
      args: {
        data: nonNull('CommentCreateInput'),
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

export const Resource = objectType({
  name: 'Resource',
  sourceType: {
    module: '@prisma/client',
    export: 'Resource',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('type', {
      type: 'ResourceType',
    })
    t.string('name')
    t.string('longtitle')
    t.field('content', {
      type: 'JSON',
    })
    t.field('components', {
      type: 'JSON',
    })
    t.string('contentText')
    t.nonNull.boolean('published')
    t.nonNull.boolean('deleted')
    t.nonNull.boolean('hidemenu')
    t.nonNull.boolean('searchable')
    t.nonNull.boolean('isfolder')
    t.nonNull.string('uri')
    t.string('class_key')
    t.float('rating')
    t.int('positiveVotesCount')
    t.int('negativeVotesCount')
    t.int('neutralVotesCount')
    t.int('oldID')
    t.int('commentOldID')
    t.int('template')
    t.date('mockUpdate')

    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })

    // TODO Перепроверить логику
    t.list.nonNull.field('Comments', {
      type: 'Resource',
      description: 'Комментарии',
      args: {
        orderBy: 'ResourceOrderByInput',
      },
      resolve({ id }, args, ctx) {
        const orderBy = args.orderBy as Prisma.ResourceOrderByInput

        return id
          ? ctx.prisma.resource.findMany({
              where: {
                Topic: id,
              },
              orderBy: orderBy ? [orderBy] : undefined,
            })
          : []
      },
    })

    t.field('Topic', {
      type: 'Resource',
      resolve({ Topic }, _, ctx) {
        return Topic
          ? ctx.prisma.resource.findUnique({ where: { id: Topic } })
          : null
      },
    })

    t.field('Blog', {
      type: 'Resource',
      resolve({ Blog }, _, ctx) {
        return Blog
          ? ctx.prisma.resource.findUnique({ where: { id: Blog } })
          : null
      },
    })
    t.field('Task', {
      type: 'Task',
      resolve({ Task }, _, ctx) {
        return Task ? ctx.prisma.task.findUnique({ where: { id: Task } }) : null
      },
    })
    t.field('Image', {
      type: 'File',
      resolve({ id }, _, ctx) {
        return id
          ? ctx.prisma.file.findFirst({ where: { ImageResource: id } })
          : null
      },
    })
    t.field('CodeChallenge', {
      type: 'CodeChallenge',
      resolve({ id }, _, ctx) {
        // TODO Check logic
        return id
          ? ctx.prisma.codeChallenge.findFirst({ where: { Topic: id } })
          : null
      },
    })

    t.list.nonNull.field('Tags', {
      type: 'ResourceTag',
      // args: {
      // },
      resolve({ id }, _args, ctx) {
        return id
          ? ctx.prisma.resourceTag.findMany({
              where: {
                Resource: id,
              },
            })
          : []
      },
    })
  },
})

export const ResourceType = enumType({
  name: 'ResourceType',
  members: [
    'Blog',
    'Comment',
    'PersonalBlog',
    'Project',
    'Resource',
    'Service',
    'Team',
    'Topic',
  ],
})

export const ResourceEdge = objectType({
  name: 'ResourceEdge',
  definition(t) {
    t.nonNull.field('node', {
      type: 'Resource',
    })
  },
})

export const AggregateResource = objectType({
  name: 'AggregateResource',
  definition(t) {
    t.nonNull.int('count')
  },
})

export const ResourceConnection = objectType({
  name: 'ResourceConnection',
  definition(t) {
    t.nonNull.list.field('edges', {
      type: 'ResourceEdge',
    })
    t.nonNull.field('aggregate', {
      type: 'AggregateResource',
    })
  },
})

export const ResourceResponse = objectType({
  name: 'ResourceResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'Resource',
    })
  },
})

export const CommentCreateInput = inputObjectType({
  name: 'CommentCreateInput',
  definition(t) {
    t.field('text', {
      type: 'JSON',
    })
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
    t.boolean('published')
    t.id('blogID')
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
