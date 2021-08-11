import { Prisma } from '@prisma/client'
import {
  enumType,
  extendType,
  inputObjectType,
  nonNull,
  objectType,
} from 'nexus'

export const ProjectExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.project({})
    t.crud.projects({
      filtering: true,
      ordering: true,
    })

    t.nonNull.field('projectsConnection', {
      type: 'ProjectConnection',
      args: {
        where: 'ProjectWhereInput',
        orderBy: 'ProjectOrderByInput',
        first: 'Int',
        skip: 'Int',
      },
      resolve: async (_, args, ctx) => {
        const where = args.where as Prisma.ProjectWhereInput
        const orderBy = args.orderBy as Prisma.ProjectOrderByInput
        const take = args.first || undefined
        const skip = args.skip || undefined

        const countPromise = ctx.prisma.project.count({
          where,
        })

        const projectsPromise = ctx.prisma.project.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
          take,
          skip,
        })

        return Promise.all([countPromise, projectsPromise]).then((results) => {
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

export const ProjectExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createProjectProcessor', {
      type: 'ProjectResponse',
      args: {
        data: nonNull('ProjectCreateInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        return {
          success: false,
          message: 'Not implemented',
          errors: [],
        }
      },
    })
    t.nonNull.field('updateProjectProcessor', {
      type: 'ProjectResponse',
      args: {
        data: nonNull('ProjectUpdateInput'),
        where: nonNull('ProjectWhereUniqueInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        return {
          success: false,
          message: 'Not implemented',
          errors: [],
        }
      },
    })
  },
})

export const Project = objectType({
  name: 'Project',
  sourceType: {
    module: '@prisma/client',
    export: 'Project',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.string('domain')
    t.string('description')
    t.string('url')
    t.field('content', {
      type: 'JSON',
    })
    t.string('contentText')

    t.int('sequence')

    t.field('type', {
      type: 'ProjectType',
    })
    t.field('status', {
      type: 'ProjectStatus',
    })
    t.boolean('public')
    t.int('oldID')

    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.field('Resource', {
      type: 'Resource',
      resolve({ Resource }, _, ctx) {
        return Resource
          ? ctx.prisma.resource.findUnique({ where: { id: Resource } })
          : null
      },
    })

    // TODO Restore logic
    t.list.nonNull.field('Members', {
      type: 'ProjectMember',
    })

    // TODO Restore logic
    t.list.nonNull.field('ProjectTasks', {
      type: 'ProjectTask',
      args: {
        orderBy: 'ProjectTaskOrderByInput',
      },
    })
  },
})

export const ProjectType = enumType({
  name: 'ProjectType',
  members: ['Education'],
})

export const ProjectStatus = enumType({
  name: 'ProjectStatus',
  members: [
    'New',
    'Accepted',
    'Rejected',
    'Processing',
    'Completed',
    'Reopened',
  ],
})

export const AggregateProject = objectType({
  name: 'AggregateProject',
  definition(t) {
    t.nonNull.int('count')
  },
})

export const ProjectEdge = objectType({
  name: 'ProjectEdge',
  definition(t) {
    t.nonNull.field('node', {
      type: 'Project',
    })
  },
})

export const ProjectConnection = objectType({
  name: 'ProjectConnection',
  definition(t) {
    t.nonNull.list.field('edges', {
      type: 'ProjectEdge',
    })
    t.nonNull.field('aggregate', {
      type: 'AggregateProject',
    })
  },
})

export const ProjectResponse = objectType({
  name: 'ProjectResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'Project',
    })
  },
})

export const ProjectCreateInput = inputObjectType({
  name: 'ProjectCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const ProjectUpdateInput = inputObjectType({
  name: 'ProjectUpdateInput',
  definition(t) {
    t.string('name')
  },
})