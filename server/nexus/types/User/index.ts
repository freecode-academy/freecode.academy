import { Prisma } from '@prisma/client'
import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { blockUser } from './resolvers/blockUser'
import { signin } from './resolvers/signin'
import { signup } from './resolvers/signup'
import { unblockUser } from './resolvers/unblockUser'
import { updateUserProcessor } from './resolvers/updateUserProcessor'
import { updateCurrentUser } from './resolvers/updateCurrentUser'
import { updateOneUser } from './resolvers/updateOneUser'
import { authViaTelegramResolver } from './resolvers/authViaTelegram'

export * from './User'

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
        data: 'UserSignupDataInput',
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

    t.nonNull.field('authViaTelegram', {
      description: '',
      type: 'AuthPayload',
      args: {
        tgAuthData: nonNull('TelegramAuthDataInput'),
      },
      resolve: authViaTelegramResolver,
    })

    // TODO Move to updateCurrentUser
    t.nonNull.field('updateUserProcessor', {
      type: 'UserResponse',
      args: {
        data: nonNull('UserUpdateInput'),
      },
      resolve: updateUserProcessor,
    })

    t.nonNull.field('blockUser', {
      type: 'User',
      description: 'Заблокировать пользователя',
      args: {
        where: nonNull('UserWhereUniqueInput'),
      },
      resolve: blockUser,
    })

    t.nonNull.field('unblockUser', {
      type: 'User',
      description: 'Разблокировать пользователя',
      args: {
        where: nonNull('UserWhereUniqueInput'),
      },
      resolve: unblockUser,
    })

    t.nonNull.field('updateOneUser', {
      type: 'User',
      description: 'Обновление пользователя',
      args: {
        where: nonNull('UserWhereUniqueInput'),
        data: nonNull('UserUpdateInput'),
      },
      resolve: updateOneUser,
    })

    t.nonNull.field('updateCurrentUser', {
      type: 'User',
      description: 'Обновление текущего пользователя',
      args: {
        data: nonNull('CurrentUserUpdateInput'),
      },
      resolve: updateCurrentUser,
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

export const CurrentUserUpdateInput = inputObjectType({
  name: 'CurrentUserUpdateInput',
  definition(t) {
    t.string('username')
    t.string('fullname')
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
    t.int('technologyLevel')
    t.boolean('isMentor', {
      description: 'Готов быть ментором',
    })
    // t.field('NotificationTypes', {
    //   type: 'NotificationType_UserNotificationTypes_UpdateInput',
    // })
    t.string('telegram')
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

// export const NotificationType_UserNotificationTypes_UpdateInput =
//   inputObjectType({
//     name: 'NotificationType_UserNotificationTypes_UpdateInput',
//     definition(t) {
//       t.field('connect', {
//         type: 'NotificationTypeWhereUniqueInput',
//       })
//       t.field('disconnect', {
//         type: 'NotificationTypeWhereUniqueInput',
//       })
//     },
//   })

export const TelegramAuthDataInput = inputObjectType({
  name: 'TelegramAuthDataInput',
  definition(t) {
    t.nonNull.int('id')
    t.string('first_name')
    t.string('last_name')
    t.string('username')
    t.string('photo_url')
    t.int('auth_date')
    t.string('hash')
  },
})
