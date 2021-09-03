import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const createTaskProcessor: FieldResolver<
  'Mutation',
  'createTaskProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const {
    data: {
      name: nameProps,
      content,
      description,
      endDate,
      endDatePlaning,
      id,
      needHelp,
      startDate,
      startDatePlaning,
      status,
      Project,
      Parent,
    },
  } = args

  const name = nameProps.trim()

  if (!name) {
    throw new Error('Не указано название задачи')
  }

  const createdData: Prisma.TaskCreateInput = {
    name,
    content,
    description,
    endDate,
    endDatePlaning,
    id: id || undefined,
    needHelp,
    startDate,
    startDatePlaning,
    status: status || undefined,
    User: {
      connect: {
        id: currentUserId,
      },
    },
  }

  if (Parent?.connect) {
    const connect = Parent?.connect as Prisma.TaskWhereUniqueInput

    createdData.Task = {
      connect,
    }
  }

  if (Project?.connect) {
    // Object.assign(data, {
    //   TaskProjects: {
    //     create: {
    //       Project,
    //       CreatedBy: {
    //         connect: {
    //           id: currentUserId,
    //         },
    //       },
    //     },
    //   },
    // });

    const ProjectConnect = Project.connect as Prisma.ProjectWhereUniqueInput

    createdData.ProjectTasks = {
      create: {
        Project_ProjectToProjectTask: {
          connect: ProjectConnect,
        },
        User: {
          connect: {
            id: currentUserId,
          },
        },
      },
    }
  }

  // Object.assign(data, {
  //   ...this.getCreatedBy(),
  // })

  // Object.assign(args, {
  //   data,
  // })

  const task = await ctx.prisma.task.create({
    data: createdData,
  })

  return {
    success: !!task,
    message: '',
    errors: [],
    data: task,
  }
}
