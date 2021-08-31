import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createLearnStrategyStage: FieldResolver<
  'Mutation',
  'createLearnStrategyStage'
> = async (_, args, ctx) => {
  const {
    data: { LearnStrategy, LearnStrategyTarget, TechnologyTarget },
  } = args

  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const learnStrategyCurrent = await ctx.prisma.learnStrategy.findUnique({
    where: args.data.LearnStrategy,
  })

  if (!learnStrategyCurrent) {
    throw new Error('Не был получен объект')
  }

  if (learnStrategyCurrent.createdById !== currentUserId) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  const createData: Prisma.LearnStrategyStageCreateInput = {
    LearnStrategy: {
      connect: {
        id: LearnStrategy.id,
      },
    },
  }

  if (LearnStrategyTarget && TechnologyTarget) {
    throw new Error(
      'Необходимо четко указать  или технологию или стретегию (не оба типа)'
    )
  } else if (LearnStrategyTarget) {
    if (LearnStrategyTarget.id === LearnStrategy.id) {
      throw new Error('Нельзя ссылаться на саму себя')
    }

    createData.LearnStrategyTarget = {
      connect: {
        id: LearnStrategyTarget.id,
      },
    }
  } else if (TechnologyTarget) {
    createData.Technology = {
      connect: {
        id: TechnologyTarget.id,
      },
    }

    createData.level = TechnologyTarget.level
  } else {
    throw new Error('Необходимо указать технологию или стретегию')
  }

  return ctx.prisma.learnStrategyStage.create({
    data: createData,
  })
}
