import { Prisma } from '@prisma/client'
import { objectType, extendType, inputObjectType, nonNull, intArg } from 'nexus'
import { signin } from './resolvers/signin'
import { signup } from './resolvers/signup'
import { updateUserProcessor } from './resolvers/updateUserProcessor'

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
  },
})

export const UserExtendMutation = extendType({
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
        data: nonNull('UserUpdateInput'),
      },
      resolve: updateUserProcessor,
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
    t.technologyLevel('technologyLevel')

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
      resolve({ id }, _, ctx) {
        /**
         * Если это не текущий пользователь, то ничего не выводим
         */
        if (ctx.currentUser?.id !== id) {
          return null
        }

        return ctx.prisma.user
          .findUnique({ where: { id } })
          .NotificationTypes_UserNotificationTypes()
      },
    })

    // TODO Restore logic
    t.list.nonNull.field('UserTechnologies', {
      type: 'UserTechnology',
      resolve({ id }, _, ctx) {
        return ctx.prisma.userTechnology.findMany({
          where: {
            CreatedBy: id,
          },
        })
      },
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

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('email')
    t.string('username')
    t.string('phone')
    t.string('fullname')
    t.string('image')
    t.string('address')
    t.string('password')
    t.boolean('acceptChatMessageAnonymous')
    t.boolean('acceptNewChatRoomAnonymous')
    t.boolean('acceptNewChatRoom')
    t.technologyLevel('technologyLevel')
    t.field('NotificationTypes', {
      type: 'NotificationType_UserNotificationTypes_UpdateInput',
    })
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

export const NotificationType_UserNotificationTypes_UpdateInput =
  inputObjectType({
    name: 'NotificationType_UserNotificationTypes_UpdateInput',
    definition(t) {
      t.field('connect', {
        type: 'NotificationTypeWhereUniqueInput',
      })
      t.field('disconnect', {
        type: 'NotificationTypeWhereUniqueInput',
      })
    },
  })
