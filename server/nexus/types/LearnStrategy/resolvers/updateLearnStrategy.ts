import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const updateLearnStrategy: FieldResolver<
  'Mutation',
  'updateLearnStrategy'
> = async (_, args, ctx) => {
  const {
    data: {
      // level,
      name,
      description,
    },
  } = args

  const where = args.where as Prisma.LearnStrategyWhereUniqueInput

  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  /**
   * Получаем исходный объект
   */
  const learnStrategyCurrent = await ctx.prisma.learnStrategy.findUnique({
    where,
  })

  if (!learnStrategyCurrent) {
    throw new Error('Не был получен объект')
  }

  if (learnStrategyCurrent.createdById !== currentUserId) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  if (name !== undefined) {
    if (!name) {
      throw new Error('Не заполнено название')
    }
  }

  const updateData: Prisma.LearnStrategyUpdateInput = {
    name,
    description,
    // level: level !== null ? level : undefined,
  }

  const result = await ctx.prisma.learnStrategy.update({
    data: updateData,
    where,
  })

  return result
}
