import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { createUserLearnStrategy } from './resolvers/createUserLearnStrategy'

export const UserLearnStrategyExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.userLearnStrategy()

    t.crud.userLearnStrategies({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('userLearnStrategiesCount', {
      args: {
        where: 'UserLearnStrategyWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.UserLearnStrategyWhereInput

        return ctx.prisma.userLearnStrategy.count({
          where,
        })
      },
    })
  },
})

export const UserLearnStrategyExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUserLearnStrategy', {
      type: 'UserLearnStrategy',
      args: {
        data: nonNull('UserLearnStrategyCreateInput'),
      },
      resolve: createUserLearnStrategy,
    })
  },
})

export const UserLearnStrategy = objectType({
  name: 'UserLearnStrategy',
  sourceType: {
    module: '@prisma/client',
    export: 'UserLearnStrategy',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    // t.string('name')
    // t.field('components', { type: 'JSON' })
    // t.string('contentText')
    t.string('createdById')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ createdById }, _, ctx) {
        return createdById
          ? ctx.prisma.user.findUnique({ where: { id: createdById } })
          : null
      },
    })
    t.string('learnStrategyId')
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
  },
})

export const UserLearnStrategyCreateInput = inputObjectType({
  name: 'UserLearnStrategyCreateInput',
  definition(t) {
    t.nonNull.field('LearnStrategy', {
      type: 'LearnStrategyWhereUniqueInput',
    })
  },
})
