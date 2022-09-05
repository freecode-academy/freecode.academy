import { Prisma } from '@prisma/client'
import {
  enumType,
  extendType,
  inputObjectType,
  nonNull,
  objectType,
} from 'nexus'
import { createTaskProcessor } from './resolvers/createTaskProcessor'
import { updateTaskProcessor } from './resolvers/updateTaskProcessor'

export const TaskExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.task()

    t.crud.tasks({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('tasksCount', {
      args: {
        where: 'TaskWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.TaskWhereInput

        return ctx.prisma.task.count({
          where,
        })
      },
    })
  },
})

export const TaskExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTaskProcessor', {
      type: 'TaskResponse',
      args: {
        data: nonNull('TaskCreateInput'),
      },
      resolve: createTaskProcessor,
    })
    t.nonNull.field('updateTaskProcessor', {
      type: 'TaskResponse',
      args: {
        data: nonNull('TaskUpdateInput'),
        where: nonNull('TaskWhereUniqueInput'),
      },
      resolve: updateTaskProcessor,
    })
  },
})

export const Task = objectType({
  name: 'Task',
  sourceType: {
    module: '@prisma/client',
    export: 'Task',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.string('description')
    t.nonNull.field('status', {
      type: 'TaskStatus',
    })
    t.field('content', {
      type: 'JSON',
    })
    t.date('startDatePlaning')
    t.date('endDatePlaning')
    t.date('startDate')
    t.date('endDate')
    t.boolean('needHelp')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.list.nonNull.field('TaskProjects', {
      type: 'ProjectTask',
      resolve({ id }, _, ctx) {
        return ctx.prisma.projectTask.findMany({
          where: {
            Task: id,
          },
        })
      },
    })
    t.list.nonNull.field('TaskTechnologies', {
      type: 'TaskTechnology',
      resolve({ id }, _, ctx) {
        return ctx.prisma.taskTechnology.findMany({
          where: {
            Task: id,
          },
        })
      },
    })

    t.field('Parent', {
      type: 'Task',
      resolve({ Parent }, _, ctx) {
        return Parent
          ? ctx.prisma.task.findUnique({ where: { id: Parent } })
          : null
      },
    })

    t.field('CodeChallengeCompletion', {
      type: 'CodeChallengeCompletion',
      resolve({ id }, _, ctx) {
        return ctx.prisma.codeChallengeCompletion.findFirst({
          where: { Task: id },
        })
      },
    })

    t.list.nonNull.field('Timers', {
      type: 'Timer',
      args: {
        orderBy: 'TimerOrderByWithRelationInput',
        where: 'TimerWhereInput',
      },
      resolve({ id }, args, ctx) {
        const where = {
          ...args.where,
          Task: id,
        } as Prisma.TimerWhereInput

        const orderBy = args.orderBy as Prisma.TimerOrderByWithRelationInput

        return ctx.prisma.timer.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
        })
      },
    })

    t.list.nonNull.field('Comments', {
      type: 'Resource',
      args: {
        orderBy: 'ResourceOrderByWithRelationInput',
        where: 'ResourceWhereInput',
      },
      resolve({ id }, args, ctx) {
        const where = {
          ...args.where,
          Task: id,
          type: 'Comment',
        } as Prisma.ResourceWhereInput

        const orderBy = args.orderBy as Prisma.ResourceOrderByWithRelationInput

        return ctx.prisma.resource.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
        })
      },
    })
  },
})

export const TaskStatus = enumType({
  name: 'TaskStatus',
  members: [
    'New',
    'Accepted',
    'Rejected',
    'Progress',
    'Paused',
    'Done',
    'Discuss',
    'Approved',
    'RevisionsRequired',
    'Completed',
  ],
})

export const TaskResponse = objectType({
  name: 'TaskResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'Task',
    })
  },
})

export const TaskCreateInput = inputObjectType({
  name: 'TaskCreateInput',
  definition(t) {
    t.id('id')
    t.nonNull.string('name')
    t.string('description')
    t.field('content', {
      type: 'JSON',
    })
    t.field('status', {
      type: 'TaskStatus',
    })
    t.date('startDatePlaning')
    t.date('endDatePlaning')
    t.date('startDate')
    t.date('endDate')
    t.boolean('needHelp')
    t.field('Project', {
      type: 'ProjectCreateOneWithoutProjectTasksInput',
    })
    t.field('Parent', {
      type: 'TaskCreateOneWithoutChildsInput',
    })
  },
})

export const TaskUpdateInput = inputObjectType({
  name: 'TaskUpdateInput',
  definition(t) {
    t.string('name')
    t.string('description')
    t.field('content', {
      type: 'JSON',
    })
    t.field('status', {
      type: 'TaskStatus',
    })
    t.date('startDatePlaning')
    t.date('endDatePlaning')
    t.date('startDate')
    t.date('endDate')
    t.boolean('needHelp')
    t.field('Timers', {
      type: 'TimerUpdateManyWithoutTaskInput',
    })
  },
})

export const TimerUpdateManyWithoutTaskInput = inputObjectType({
  name: 'TimerUpdateManyWithoutTaskInput',
  definition(t) {
    t.list.nonNull.field('updateMany', {
      type: 'TimerUpdateManyWithWhereNestedInput',
    })
  },
})

export const ProjectCreateOneWithoutProjectTasksInput = inputObjectType({
  name: 'ProjectCreateOneWithoutProjectTasksInput',
  definition(t) {
    t.field('connect', {
      type: 'ProjectWhereUniqueInput',
    })
  },
})

export const TaskCreateOneWithoutChildsInput = inputObjectType({
  name: 'TaskCreateOneWithoutChildsInput',
  definition(t) {
    t.field('connect', {
      type: 'TaskWhereUniqueInput',
    })
  },
})
