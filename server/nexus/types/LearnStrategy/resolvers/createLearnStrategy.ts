import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createLearnStrategy: FieldResolver<
  'Mutation',
  'createLearnStrategy'
> = async (_, args, ctx) => {
  const {
    data: { name, description, level },
  } = args

  const { id: currentUserId, technologyLevel } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  if (!name) {
    throw new Error('Не заполнено название')
  }

  if (!technologyLevel) {
    throw new Error(
      'Не указан ваш технологический уровень. Сделать это можно в своем профиле.'
    )
  } else if (technologyLevel + 1 < level) {
    throw new Error(
      `Нельзя указать технологический уровень выше вашего более чем на 1. Максимально разрешенный: ${
        technologyLevel + 1
      }`
    )
  }

  const createData: Prisma.LearnStrategyCreateInput = {
    name,
    description,
    level,
    CreatedBy: {
      connect: {
        id: currentUserId,
      },
    },
  }

  const result = await ctx.prisma.learnStrategy.create({
    data: createData,
  })

  return result
}
