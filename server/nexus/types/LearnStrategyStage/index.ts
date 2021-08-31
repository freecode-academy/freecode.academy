import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { createLearnStrategyStage } from './resolvers/createLearnStrategyStage'
import { deleteLearnStrategyStage } from './resolvers/deleteLearnStrategyStage'

export const LearnStrategyStageExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.learnStrategyStage()

    t.crud.learnStrategyStages({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('learnStrategyStagesCount', {
      args: {
        where: 'LearnStrategyStageWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.LearnStrategyStageWhereInput

        return ctx.prisma.learnStrategyStage.count({
          where,
        })
      },
    })
  },
})

export const LearnStrategyStageExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createLearnStrategyStage', {
      type: 'LearnStrategyStage',
      args: {
        data: nonNull('LearnStrategyStageCreateInput'),
      },
      resolve: createLearnStrategyStage,
    })

    t.nonNull.field('deleteLearnStrategyStage', {
      type: 'LearnStrategyStage',
      args: {
        where: nonNull('LearnStrategyStageWhereUniqueInput'),
      },
      resolve: deleteLearnStrategyStage,
    })
  },
})

export const LearnStrategyStage = objectType({
  name: 'LearnStrategyStage',
  sourceType: {
    module: '@prisma/client',
    export: 'LearnStrategyStage',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')

    t.nonNull.string('learnStrategyId')
    t.field('LearnStrategy', {
      type: 'LearnStrategy',
      resolve({ learnStrategyId }, _, ctx) {
        return learnStrategyId
          ? ctx.prisma.learnStrategy.findUnique({
              where: { id: learnStrategyId },
            })
          : null
      },
    })
    t.string('learnStrategyTargetId')
    t.field('LearnStrategyTarget', {
      type: 'LearnStrategy',
      resolve({ learnStrategyTargetId }, _, ctx) {
        return learnStrategyTargetId
          ? ctx.prisma.learnStrategy.findUnique({
              where: { id: learnStrategyTargetId },
            })
          : null
      },
    })
    t.string('technologyId')
    t.field('Technology', {
      type: 'Technology',
      resolve({ technologyId }, _, ctx) {
        return technologyId
          ? ctx.prisma.technology.findUnique({ where: { id: technologyId } })
          : null
      },
    })
    t.int('level', {
      description: 'Если цель освоить технологию, то до какого уровня',
    })
  },
})

export const LearnStrategyStageCreateInput = inputObjectType({
  name: 'LearnStrategyStageCreateInput',
  description:
    'Этапом развития может быть или технология, или другая стратегия развития',
  definition(t) {
    t.nonNull.field('LearnStrategy', {
      type: 'LearnStrategyStageCreateLearnStrategyInput',
      description: 'Стратегия развития, для которой создается этап',
    })
    t.field('LearnStrategyTarget', {
      type: 'LearnStrategyStageCreateLearnStrategyInput',
      description: 'Стратегия развития',
    })
    t.field('TechnologyTarget', {
      type: 'LearnStrategyStageCreateTechnologyInput',
      description: 'Технология',
    })
  },
})

export const LearnStrategyStageCreateLearnStrategyInput = inputObjectType({
  name: 'LearnStrategyStageCreateLearnStrategyInput',
  description: 'Стратегия развития',
  definition(t) {
    t.nonNull.id('id')
  },
})

export const LearnStrategyStageCreateTechnologyInput = inputObjectType({
  name: 'LearnStrategyStageCreateTechnologyInput',
  description: 'Технология',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.field('level', {
      type: 'UserTechnologyLevel',
    })
  },
})

export const LearnStrategyStageWhereUniqueInput = inputObjectType({
  name: 'LearnStrategyStageWhereUniqueInput',
  definition(t) {
    t.nonNull.id('id')
  },
})
