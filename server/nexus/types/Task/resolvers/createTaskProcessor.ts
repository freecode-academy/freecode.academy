import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const createTaskProcessor: FieldResolver<
  'Mutation',
  'createTaskProcessor'
> = async (_, args, ctx) => {
  const { id: currentUserId } = ctx.currentUser || {}

  if (!currentUserId) {
    throw new Error('Please sign in to continue')
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

  const createData: Prisma.TaskCreateInput = {
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
    Project: Project?.connect?.id
      ? {
          connect: {
            id: Project.connect.id,
          },
        }
      : undefined,
  }

  if (Parent?.connect?.id) {
    // const connect = Parent?.connect as Prisma.TaskWhereUniqueInput

    createData.Task = {
      connect: {
        id: Parent.connect.id,
      },
    }
  }

  // if (Project?.connect) {
  //   // Object.assign(data, {
  //   //   TaskProjects: {
  //   //     create: {
  //   //       Project,
  //   //       CreatedBy: {
  //   //         connect: {
  //   //           id: currentUserId,
  //   //         },
  //   //       },
  //   //     },
  //   //   },
  //   // });

  //   const ProjectConnect = Project.connect as Prisma.ProjectWhereUniqueInput

  //   createData.ProjectTasks = {
  //     create: {
  //       Project_ProjectToProjectTask: {
  //         connect: ProjectConnect,
  //       },
  //       User: {
  //         connect: {
  //           id: currentUserId,
  //         },
  //       },
  //     },
  //   }
  // }

  // Object.assign(data, {
  //   ...this.getCreatedBy(),
  // })

  // Object.assign(args, {
  //   data,
  // })

  const task = await ctx.prisma.task.create({
    data: createData,
  })

  return {
    success: !!task,
    message: '',
    errors: [],
    data: task,
  }
}
