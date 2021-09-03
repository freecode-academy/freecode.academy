import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { createTechnology } from './resolvers/createTechnology'

export const TechnologyExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.technology()

    t.crud.technologies({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('technologiesCount', {
      args: {
        where: 'TechnologyWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.TechnologyWhereInput

        return ctx.prisma.technology.count({
          where,
        })
      },
    })

    // t.nonNull.field('technologiesConnection', {
    //   type: 'TechnologyConnection',
    //   args: {
    //     where: 'TechnologyWhereInput',
    //     orderBy: 'TechnologyOrderByInput',
    //     first: 'Int',
    //     skip: 'Int',
    //   },
    //   resolve: async (_, args, ctx) => {
    //     const where = args.where as Prisma.TechnologyWhereInput
    //     const orderBy = args.orderBy as Prisma.TechnologyOrderByInput
    //     const take = args.first || undefined
    //     const skip = args.skip || undefined

    //     const countPromise = ctx.prisma.technology.count({
    //       where,
    //     })

    //     const technologysPromise = ctx.prisma.technology.findMany({
    //       where,
    //       orderBy: orderBy ? [orderBy] : undefined,
    //       take,
    //       skip,
    //     })

    //     return Promise.all([countPromise, technologysPromise]).then(
    //       (results) => {
    //         return {
    //           aggregate: {
    //             count: results[0],
    //           },
    //           edges: results[1].map((n) => {
    //             return {
    //               node: n,
    //             }
    //           }),
    //         }
    //       }
    //     )
    //   },
    // })
  },
})

export const TechnologyExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTechnology', {
      type: 'Technology',
      args: {
        data: nonNull('TechnologyCreateInput'),
      },
      resolve: createTechnology,
    })
  },
})

export const Technology = objectType({
  name: 'Technology',
  sourceType: {
    module: '@prisma/client',
    export: 'Technology',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.string('name')
    t.field('components', { type: 'JSON' })
    t.string('contentText')
    t.string('site_url')
    t.int('level1hours', {
      description: 'Примерное количество часов на освоение уровня',
    })
    t.int('level2hours', {
      description: 'Примерное количество часов на освоение уровня',
    })
    t.int('level3hours', {
      description: 'Примерное количество часов на освоение уровня',
    })
    t.int('level4hours', {
      description: 'Примерное количество часов на освоение уровня',
    })
    t.int('level5hours', {
      description: 'Примерное количество часов на освоение уровня',
    })
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.list.nonNull.field('UserTechnologies', {
      type: 'UserTechnology',
      resolve({ id }, _, ctx) {
        return ctx.prisma.userTechnology.findMany({
          where: {
            Technology: id,
          },
        })
      },
    })
  },
})

// export const AggregateTechnology = objectType({
//   name: 'AggregateTechnology',
//   definition(t) {
//     t.nonNull.int('count')
//   },
// })

// export const TechnologyEdge = objectType({
//   name: 'TechnologyEdge',
//   definition(t) {
//     t.nonNull.field('node', {
//       type: 'Technology',
//     })
//   },
// })

// export const TechnologyConnection = objectType({
//   name: 'TechnologyConnection',
//   definition(t) {
//     t.nonNull.list.field('edges', {
//       type: 'TechnologyEdge',
//     })
//     t.nonNull.field('aggregate', {
//       type: 'AggregateTechnology',
//     })
//   },
// })

export const TechnologyCreateInput = inputObjectType({
  name: 'TechnologyCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})
