import { Prisma } from '@prisma/client'
import { objectType, extendType, inputObjectType, nonNull, intArg } from 'nexus'
import { signin, signup } from './resolvers'

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.users({
      description: 'Список пользователей',
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('usersCount', {
      description: 'Количество пользователей',
      args: {
        where: 'UserWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.user.count({
          where: args.where as Prisma.UserCountArgs['where'],
        })
      },
    })

    t.crud.user({
      description: 'Пользователь',
    })

    t.field('me', {
      type: 'User',
      resolve(_, _args, ctx) {
        return ctx.currentUser
      },
    })

    t.nonNull.field('usersConnection', {
      type: 'UserConnection',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        first: 'Int',
        skip: 'Int',
      },
      resolve: async (_, args, ctx) => {
        const where = args.where as Prisma.UserWhereInput
        const orderBy = args.orderBy as Prisma.UserOrderByInput
        const take = args.first || undefined
        const skip = args.skip || undefined

        const countPromise = ctx.prisma.user.count({
          where,
        })

        const usersPromise = ctx.prisma.user.findMany({
          where,
          orderBy: orderBy ? [orderBy] : undefined,
          take,
          skip,
        })

        return Promise.all([countPromise, usersPromise]).then((results) => {
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

export const UserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.nonNull.field('signup', {
      description: 'Регистрация',
      type: 'AuthPayload',
      args: {
        data: nonNull('UserSignupDataInput'),
      },
      resolve: signup,
    })

    t.nonNull.field('signin', {
      description: 'Авторизация',
      type: 'AuthPayload',
      args: {
        where: nonNull('UserWhereUniqueInput'),
        data: nonNull('UserSigninDataInput'),
      },
      resolve: signin,
    })

    t.nonNull.field('updateUserProcessor', {
      type: 'UserResponse',
      args: {
        where: nonNull('UserWhereUniqueInput'),
        data: nonNull('UserUpdateInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        throw new Error('Not implemented')

        // return {
        //   success: false,
        //   message: 'Not implemented',
        //   errors: [],
        // }
      },
    })
  },
})

export const UserSignupDataInput = inputObjectType({
  name: 'UserSignupDataInput',
  definition(t) {
    t.string('username')
    t.string('email')
    t.string('fullname')
    t.string('password')
    t.string('phone')
    t.nonNull.boolean('showEmail', {
      description: 'Показывать емейл другим пользователям',
      default: false,
    })
    t.nonNull.boolean('showFullname', {
      description: 'Показывать ФИО другим пользователям',
      default: true,
    })
  },
})

export const UserSigninDataInput = inputObjectType({
  name: 'UserSigninDataInput',
  definition(t) {
    t.string('password')
  },
})

export const AuthPayload = objectType({
  name: 'AuthPayload',
  description: 'Объект ответа мутации пользователя',
  definition(t) {
    t.nonNull.boolean('success')
    t.string('message')
    t.string('token')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'User',
    })
  },
})

export const User = objectType({
  name: 'User',
  description: 'Пользователь',
  sourceType: {
    module: '@prisma/client',
    export: 'User',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.string('email', {
      resolve(parent, _args, ctx) {
        return parent.showEmail === true ||
          ctx.currentUser?.sudo === true ||
          ctx.currentUser?.id === parent.id
          ? parent.email
          : null
      },
    })
    // TODO Restore showFullname logic
    // t.string('fullname', {
    //   resolve(parent, _args, ctx) {
    //     return parent.showFullname === true ||
    //       ctx.currentUser?.sudo === true ||
    //       ctx.currentUser?.id === parent.id
    //       ? parent.fullname
    //       : null
    //   },
    // })
    t.string('username')
    t.boolean('sudo')
    t.boolean('showEmail', {
      description: 'Показывать емейл другим пользователям',
    })
    // t.nonNull.boolean('showFullname', {
    //   description: 'Показывать ФИО другим пользователям',
    // })
    t.string('image', {
      description: 'Avatar',
    })

    t.boolean('showPhone')
    t.boolean('active')
    t.boolean('activated')
    t.boolean('deleted')
    t.boolean('hasEmail')
    t.boolean('hasPhone')

    t.string('phone')
    t.string('fullname')
    t.string('address')
    t.boolean('acceptChatMessageAnonymous')
    t.boolean('acceptNewChatRoomAnonymous')
    t.boolean('acceptNewChatRoom')

    t.list.nonNull.field('CodeChallengeCompletions', {
      type: 'CodeChallengeCompletion',
      resolve({ id }, _, ctx) {
        return ctx.prisma.codeChallengeCompletion.findMany({
          where: {
            CreatedBy: id,
          },
        })
      },
    })

    t.list.nonNull.field('EthAccounts', {
      type: 'EthAccount',
      resolve({ id }, _, ctx) {
        return ctx.prisma.ethAccount.findMany({
          where: {
            CreatedBy: id,
          },
        })
      },
    })

    t.list.nonNull.field('Timers', {
      type: 'Timer',
      args: {
        first: intArg(),
        where: 'TimerWhereInput',
      },
      resolve({ id }, args, ctx) {
        const first = args.first || undefined
        // const where = args.where || {} as Omit<Prisma.TimerWhereInput, "CreatedBy">;
        const where = {
          ...args.where,
          CreatedBy: id,
        } as Prisma.TimerWhereInput

        return ctx.prisma.timer.findMany({
          where,
          take: first,
        })
      },
    })

    // TODO Restore logic
    t.list.nonNull.field('NotificationTypes', {
      type: 'NotificationType',
    })

    // TODO Restore logic
    t.list.nonNull.field('UserTechnologies', {
      type: 'UserTechnology',
    })

    t.list.nonNull.field('ProjectsCreated', {
      type: 'Project',
      description: 'Проекты, созданные пользователем',
      resolve({ id }, _, ctx) {
        return ctx.prisma.project.findMany({ where: { CreatedBy: id } })
      },
    })

    t.list.nonNull.field('Projects', {
      type: 'ProjectMember',
      description: 'Проекты, в которых участвует пользователь',
      resolve({ id }, _, ctx) {
        return ctx.prisma.projectMember.findMany({
          where: {
            User: id,
          },
        })
      },
    })
  },
})

export const AggregateUser = objectType({
  name: 'AggregateUser',
  definition(t) {
    t.nonNull.int('count')
  },
})

export const UserEdge = objectType({
  name: 'UserEdge',
  definition(t) {
    t.nonNull.field('node', {
      type: 'User',
    })
  },
})

export const UserConnection = objectType({
  name: 'UserConnection',
  definition(t) {
    t.nonNull.list.field('edges', {
      type: 'UserEdge',
    })
    t.nonNull.field('aggregate', {
      type: 'AggregateUser',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('username')
    t.string('phone')
    t.string('fullname')
    t.string('image')
    t.string('address')
    t.boolean('acceptChatMessageAnonymous')
    t.boolean('acceptNewChatRoomAnonymous')
    t.boolean('acceptNewChatRoom')
  },
})

export const UserResponse = objectType({
  name: 'UserResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'User',
    })
  },
})

export const UserCreateOneInput = inputObjectType({
  name: 'UserCreateOneInput',
  definition(t) {
    t.field('connect', {
      type: 'UserWhereUniqueInput',
    })
  },
})
