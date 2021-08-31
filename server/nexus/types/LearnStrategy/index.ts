import { Prisma } from '@prisma/client'
import { extendType, objectType, nonNull, inputObjectType } from 'nexus'
import { createLearnStrategy } from './resolvers/createLearnStrategy'
import { updateLearnStrategy } from './resolvers/updateLearnStrategy'

export const LearnStrategyExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.learnStrategy()

    t.crud.learnStrategies({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('learnStrategiesCount', {
      args: {
        where: 'LearnStrategyWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.LearnStrategyWhereInput

        return ctx.prisma.learnStrategy.count({
          where,
        })
      },
    })
  },
})

export const LearnStrategyExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createLearnStrategy', {
      type: 'LearnStrategy',
      args: {
        data: nonNull('LearnStrategyCreateInput'),
      },
      resolve: createLearnStrategy,
    })
    t.nonNull.field('updateLearnStrategy', {
      type: 'LearnStrategy',
      args: {
        data: nonNull('LearnStrategyUpdateInput'),
        where: nonNull('LearnStrategyWhereUniqueInput'),
      },
      resolve: updateLearnStrategy,
    })
  },
})

export const LearnStrategy = objectType({
  name: 'LearnStrategy',
  sourceType: {
    module: '@prisma/client',
    export: 'LearnStrategy',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.string('description')
    t.nonNull.field('level', {
      type: 'UserTechnologyLevel',
    })
    t.nonNull.string('createdById')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ createdById }, _, ctx) {
        return createdById
          ? ctx.prisma.user.findUnique({ where: { id: createdById } })
          : null
      },
    })
    t.list.nonNull.field('LearnStrategyStages', {
      type: 'LearnStrategyStage',
      resolve({ id }, _, ctx) {
        return ctx.prisma.learnStrategyStage.findMany({
          where: {
            learnStrategyId: id,
          },
        })
      },
    })
    t.list.nonNull.field('UserLearnStrategies', {
      type: 'UserLearnStrategy',
      resolve({ id }, _, ctx) {
        return ctx.prisma.userLearnStrategy.findMany({
          where: {
            learnStrategyId: id,
          },
        })
      },
    })
  },
})

export const LearnStrategyCreateInput = inputObjectType({
  name: 'LearnStrategyCreateInput',
  definition(t) {
    t.nonNull.string('name')
    t.string('description')
    t.nonNull.field('level', {
      type: 'UserTechnologyLevel',
    })
  },
})

export const LearnStrategyUpdateInput = inputObjectType({
  name: 'LearnStrategyUpdateInput',
  definition(t) {
    t.string('name')
    t.string('description')
    // t.field('level', {
    //   type: 'UserTechnologyLevel',
    // })
  },
})
