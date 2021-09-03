import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const updateTaskProcessor: FieldResolver<
  'Mutation',
  'updateTaskProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const where = args.where as Prisma.TaskWhereUniqueInput

  const currentTask = await ctx.prisma.task.findUnique({
    where,
  })

  if (!currentTask) {
    throw new Error('Не был получен объект')
  }

  if (currentTask.CreatedBy !== currentUserId) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  const {
    name: nameProps,
    content,
    description,
    endDate,
    endDatePlaning,
    needHelp,
    startDate,
    startDatePlaning,
    status,
    Timers,
  } = args.data

  const updateData: Prisma.TaskUpdateArgs['data'] = {
    content,
    description,
    endDate,
    endDatePlaning,
    needHelp,
    startDate,
    startDatePlaning,
    status: status || undefined,
  }

  if (Timers) {
    const TimersUpdate = Timers as Prisma.TaskUpdateArgs['data']['Timers']

    updateData.Timers = TimersUpdate
  }

  if (nameProps !== undefined) {
    const name = nameProps?.trim()

    if (!name) {
      throw new Error('Не указано название задачи')
    }

    updateData.name = name
  }

  const task = await ctx.prisma.task.update({
    data: updateData,
    where,
  })

  return {
    success: !!task,
    message: '',
    errors: [],
    data: task,
  }
}
