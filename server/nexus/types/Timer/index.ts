import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const TimerExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.timer({})

    t.crud.timers({
      filtering: true,
      ordering: true,
    })

    t.nonNull.field('timersConnection', {
      type: 'TimerConnection',
      args: {
        where: 'TimerWhereInput',
        orderBy: 'TimerOrderByInput',
        first: 'Int',
        skip: 'Int',
      },
      resolve: async (_, args, ctx) => {
        const where = args.where as Prisma.TimerWhereInput
        const orderBy = args.orderBy as Prisma.TimerOrderByInput
        const take = args.first || undefined
        const skip = args.skip || undefined

        const countPromise = ctx.prisma.timer.count({
          where,
        })

        const timersPromise = ctx.prisma.timer.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
          take,
          skip,
        })

        return Promise.all([countPromise, timersPromise]).then((results) => {
          return {
            aggregate: {
              count: results[0],
            },
            edges: results[1].map((n) => {
              return {
                node: n,
              }
            }),
          }
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
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        return {
          success: false,
          message: 'Not implemented',
          errors: [],
        }
      },
    })
    t.nonNull.field('updateTimerProcessor', {
      type: 'TimerResponse',
      args: {
        data: nonNull('TimerUpdateInput'),
        where: nonNull('TimerWhereUniqueInput'),
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
    t.id('id')
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
    t.field('Task', {
      type: 'TaskCreateOneWithoutTimersInput',
    })
  },
})

// export const UserCreateOneWithoutTimersInput = inputObjectType({
//   name: "UserCreateOneWithoutTimersInput",
//   definition(t) {
//     t.field("connect", {
//       type: "UserWhereUniqueInput",
//     })
//   }
// })

export const TaskCreateOneWithoutTimersInput = inputObjectType({
  name: 'TaskCreateOneWithoutTimersInput',
  definition(t) {
    t.field('connect', {
      type: 'TaskWhereUniqueInput',
    })
  },
})

export const AggregateTimer = objectType({
  name: 'AggregateTimer',
  definition(t) {
    t.nonNull.int('count')
  },
})

export const TimerEdge = objectType({
  name: 'TimerEdge',
  definition(t) {
    t.nonNull.field('node', {
      type: 'Timer',
    })
  },
})

export const TimerConnection = objectType({
  name: 'TimerConnection',
  definition(t) {
    t.nonNull.list.field('edges', {
      type: 'TimerEdge',
    })
    t.nonNull.field('aggregate', {
      type: 'AggregateTimer',
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
