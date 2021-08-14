import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const updateTimerProcessor: FieldResolver<
  'Mutation',
  'updateTimerProcessor'
> = async (_, args, ctx) => {
  const {
    data: { stopedAt },
  } = args

  const where = args.where as Prisma.TimerWhereUniqueInput

  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const currentTimer = await ctx.prisma.timer.findUnique({
    where,
  })

  if (currentTimer?.CreatedBy !== currentUserId) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  const updateData: Prisma.TimerUpdateInput = {
    stopedAt,
  }

  const timer = await ctx.prisma.timer.update({
    data: updateData,
    where,
  })

  return {
    success: !!timer,
    message: '',
    errors: [],
    data: timer,
  }
}
