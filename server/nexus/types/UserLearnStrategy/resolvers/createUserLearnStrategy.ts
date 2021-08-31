import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createUserLearnStrategy: FieldResolver<
  'Mutation',
  'createUserLearnStrategy'
> = async (_, args, ctx) => {
  const { id: currentUserId, technologyLevel } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const LearnStrategyWhere = args.data
    .LearnStrategy as Prisma.LearnStrategyWhereUniqueInput

  const LearnStrategy = await ctx.prisma.learnStrategy.findUnique({
    where: LearnStrategyWhere,
  })

  if (!LearnStrategy) {
    throw new Error('Не была получена стратегия развития')
  }

  if (!technologyLevel) {
    throw new Error(
      'Не указан ваш технологический уровень. Сделать это можно в своем профиле.'
    )
  } else if (technologyLevel + 1 < LearnStrategy.level) {
    throw new Error(
      `Нельзя подключить стратегию развития с технологическим уровнем выше вашего более чем на 1. Максимально разрешенный: ${
        technologyLevel + 1
      }`
    )
  }

  const createData: Prisma.UserLearnStrategyCreateInput = {
    CreatedBy: {
      connect: {
        id: currentUserId,
      },
    },
    LearnStrategy: {
      connect: LearnStrategyWhere,
    },
  }

  return ctx.prisma.userLearnStrategy.create({
    data: createData,
  })
}
