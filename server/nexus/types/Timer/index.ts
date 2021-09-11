import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { createTimerProcessor } from './resolvers/createTimerProcessor'
import { updateTimerProcessor } from './resolvers/updateTimerProcessor'

export const TimerExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.timer({})

    t.crud.timers({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('timersCount', {
      description: 'Количество таймеров',
      args: {
        where: 'TimerWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.timer.count({
          where: args.where as Prisma.TimerCountArgs['where'],
        })
      },
    })
  },
})

export const TimerExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTimerProcessor', {
      type: 'TimerResponse',
      args: {
        data: nonNull('TimerCreateInput'),
      },
      resolve: createTimerProcessor,
    })
    t.nonNull.field('updateTimerProcessor', {
      type: 'TimerResponse',
      args: {
        data: nonNull('TimerUpdateInput'),
        where: nonNull('TimerWhereUniqueInput'),
      },
      resolve: updateTimerProcessor,
    })
  },
})

export const Timer = objectType({
  name: 'Timer',
  sourceType: {
    module: '@prisma/client',
    export: 'Timer',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.date('stopedAt')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
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

export const TimerResponse = objectType({
  name: 'TimerResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'Timer',
    })
  },
})

export const TimerCreateInput = inputObjectType({
  name: 'TimerCreateInput',
  definition(t) {
    // t.id('id')
    t.date('stopedAt')
    // t.field("CreatedBy", {
    //   type: "UserCreateOneWithoutTimersInput",
    // })
    t.field('Task', {
      type: 'TaskCreateOneWithoutTimersInput',
    })
  },
})

export const TimerUpdateInput = inputObjectType({
  name: 'TimerUpdateInput',
  definition(t) {
    t.date('stopedAt')
    // t.field("CreatedBy", {
    //   type: "UserCreateOneWithoutTimersInput",
    // })
    // t.field('Task', {
    //   type: 'TaskCreateOneWithoutTimersInput',
    // })
  },
})

export const TaskCreateOneWithoutTimersInput = inputObjectType({
  name: 'TaskCreateOneWithoutTimersInput',
  definition(t) {
    t.field('connect', {
      type: 'TaskWhereUniqueInput',
    })
  },
})

export const TimerUpdateManyDataInput = inputObjectType({
  name: 'TimerUpdateManyDataInput',
  definition(t) {
    t.date('stopedAt')
  },
})

export const TimerUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'TimerUpdateManyWithWhereNestedInput',
  definition(t) {
    t.nonNull.field('where', {
      type: 'TimerWhereInput',
    })
    t.nonNull.field('data', {
      type: 'TimerUpdateManyDataInput',
    })
  },
})
