import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'

export const TagExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tag({})
    t.crud.tags({
      filtering: true,
      ordering: true,
    })

    t.nonNull.field('tagsConnection', {
      type: 'TagConnection',
      args: {
        where: 'TagWhereInput',
        orderBy: 'TagOrderByInput',
        first: 'Int',
        skip: 'Int',
      },
      resolve: async (_, args, ctx) => {
        const where = args.where as Prisma.TagWhereInput
        const orderBy = args.orderBy as Prisma.TagOrderByInput
        const take = args.first || undefined
        const skip = args.skip || undefined

        const countPromise = ctx.prisma.tag.count({
          where,
        })

        const tagsPromise = ctx.prisma.tag.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
          take,
          skip,
        })

        return Promise.all([countPromise, tagsPromise]).then((results) => {
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

export const Tag = objectType({
  name: 'Tag',
  sourceType: {
    module: '@prisma/client',
    export: 'Tag',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.list.nonNull.field('Resources', {
      type: 'ResourceTag',
      resolve({ id }, _, ctx) {
        return ctx.prisma.resourceTag.findMany({
          where: {
            Tag: id,
          },
        })
      },
    })
  },
})

export const AggregateTag = objectType({
  name: 'AggregateTag',
  definition(t) {
    t.nonNull.int('count')
  },
})

export const TagEdge = objectType({
  name: 'TagEdge',
  definition(t) {
    t.nonNull.field('node', {
      type: 'Tag',
    })
  },
})

export const TagConnection = objectType({
  name: 'TagConnection',
  definition(t) {
    t.nonNull.list.field('edges', {
      type: 'TagEdge',
    })
    t.nonNull.field('aggregate', {
      type: 'AggregateTag',
    })
  },
})
