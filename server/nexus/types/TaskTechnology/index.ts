import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const TaskTechnologyExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.taskTechnology()

    t.crud.taskTechnologies({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('taskTechnologysCount', {
      args: {
        where: 'TaskTechnologyWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.TaskTechnologyWhereInput

        return ctx.prisma.taskTechnology.count({
          where,
        })
      },
    })
  },
})

export const TaskTechnologyExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTaskTechnologyProcessor', {
      type: 'TaskTechnologyResponse',
      args: {
        data: nonNull('TaskTechnologyCreateInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        return {
          success: false,
          message: 'Not implemented',
          errors: [],
        }
      },
    })
    t.nonNull.field('updateTaskTechnologyProcessor', {
      type: 'TaskTechnologyResponse',
      args: {
        data: nonNull('TaskTechnologyUpdateInput'),
        where: nonNull('TaskTechnologyWhereUniqueInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        return {
          success: false,
          message: 'Not implemented',
          errors: [],
        }
      },
    })
  },
})

export const TaskTechnology = objectType({
  name: 'TaskTechnology',
  sourceType: {
    module: '@prisma/client',
    export: 'TaskTechnology',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('level', {
      type: 'UserTechnologyLevel',
    })

    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })

    t.field('Technology', {
      type: 'Technology',
      resolve({ Technology }, _, ctx) {
        return Technology
          ? ctx.prisma.technology.findUnique({ where: { id: Technology } })
          : null
      },
    })

    t.field('Task', {
      type: 'Task',
      resolve({ Task }, _, ctx) {
        return Task ? ctx.prisma.task.findUnique({ where: { id: Task } }) : null
      },
    })
  },
})

export const TaskTechnologyResponse = objectType({
  name: 'TaskTechnologyResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'TaskTechnology',
    })
  },
})

export const TaskTechnologyCreateInput = inputObjectType({
  name: 'TaskTechnologyCreateInput',
  definition(t) {
    t.field('level', {
      type: 'UserTechnologyLevel',
    })
  },
})

export const TaskTechnologyUpdateInput = inputObjectType({
  name: 'TaskTechnologyUpdateInput',
  definition(t) {
    t.field('level', {
      type: 'UserTechnologyLevel',
    })
  },
})
