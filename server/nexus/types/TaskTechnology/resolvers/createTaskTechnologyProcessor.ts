import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createTaskTechnologyProcessor: FieldResolver<
  'Mutation',
  'createTaskTechnologyProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const {
    data: { Task, Technology, id, level },
  } = args

  const taskId = Task.connect?.id
  const technologyId = Technology.connect?.id

  if (!taskId) {
    throw new Error('Не указана задача')
  }

  if (!technologyId) {
    throw new Error('Не указана технология')
  }

  const task = await ctx.prisma.task.findUnique({
    where: {
      id: taskId,
    },
    include: {
      User: true,
    },
  })

  if (task?.User?.id !== currentUserId) {
    throw new Error('Нельзя редактировать чужую задачу')
  }

  const createData: Prisma.TaskTechnologyCreateInput = {
    id: id || undefined,
    level: level || undefined,
    User: {
      connect: {
        id: currentUserId,
      },
    },
    Task_TaskToTaskTechnology: {
      connect: {
        id: taskId,
      },
    },
    Technology_TaskTechnologyToTechnology: {
      connect: {
        id: technologyId,
      },
    },
  }

  const taskTechnology = await ctx.prisma.taskTechnology.create({
    data: createData,
  })

  return {
    success: !!taskTechnology,
    message: '',
    errors: [],
    data: taskTechnology,
  }
}
