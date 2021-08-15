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
    },
  } = args

  const name = nameProps.trim()

  if (!name) {
    throw new Error('Не указано название задачи')
  }

  const createdData: Prisma.TaskCreateArgs['data'] = {
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

    const ProjectConnect =
      Project.connect as Prisma.ProjectCreateNestedOneWithoutProjectTaskInput['connect']

    createdData.ProjectTask = {
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
