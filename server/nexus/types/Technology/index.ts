import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, objectType } from 'nexus'
// import { NexusGenScalars } from 'server/nexus/generated/nexus'
// import { createTechnology } from './resolvers/createTechnology'
// import { updateTechnology } from './resolvers/updateTechnology'

export const Technology = objectType({
  name: 'Technology',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.string('description')
    // t.field('components', { type: 'JSON' })
    t.field('components', {
      type: 'JSON',
      // @ts-expect-error types
      resolve({ components }) {
        const value = components
          ? Array.isArray(components)
            ? components[0]
            : components
          : null

        return value
      },
    })
    // t.string('contentText')
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
      // @ts-expect-error types
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.list.nonNull.field('UserTechnologies', {
      type: 'UserTechnology',
      args: {
        orderBy: 'UserTechnologyOrderByWithRelationInput',
      },
      // @ts-expect-error types
      resolve({ id }, args, ctx) {
        const orderBy =
          args.orderBy as Prisma.UserTechnologyOrderByWithRelationInput

        return ctx.prisma.userTechnology.findMany({
          where: {
            Technology: id,
          },
          orderBy,
        })
      },
    })
    t.list.nonNull.field('LearnStrategyStages', {
      type: 'LearnStrategyStage',
      args: {
        orderBy: 'LearnStrategyStageOrderByWithRelationInput',
      },
      resolve({ id }, args, ctx) {
        const orderBy =
          args.orderBy as Prisma.LearnStrategyStageOrderByWithRelationInput

        return ctx.prisma.learnStrategyStage.findMany({
          where: {
            technologyId: id,
          },
          orderBy,
        })
      },
    })
  },
})

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
  },
})

// export const TechnologyExtendMutation = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.nonNull.field('createTechnology', {
//       type: 'Technology',
//       args: {
//         data: nonNull('TechnologyCreateInput'),
//       },
//       resolve: createTechnology,
//     })
//     t.nonNull.field('updateTechnology', {
//       type: 'Technology',
//       args: {
//         data: nonNull('TechnologyUpdateInput'),
//         where: nonNull('TechnologyWhereUniqueInput'),
//       },
//       resolve: updateTechnology,
//     })
//   },
// })

export const TechnologyCreateInput = inputObjectType({
  name: 'TechnologyCreateInput',
  definition(t) {
    t.nonNull.string('name')
    t.string('description')
  },
})

export const TechnologyUpdateInput = inputObjectType({
  name: 'TechnologyUpdateInput',
  definition(t) {
    t.string('name')
    t.string('description')
    t.string('site_url')
    t.field('components', {
      type: 'JSON',
    })
    t.int('level1hours')
    t.int('level2hours')
    t.int('level3hours')
    t.int('level4hours')
    t.int('level5hours')
  },
})
