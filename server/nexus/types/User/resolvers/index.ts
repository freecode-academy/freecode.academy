import { FieldResolver } from 'nexus'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { Prisma, User } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'

export type AuthTokenData = {
  tokenId: string
}

/**
 * Создание пароля
 */
export const createPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}

/**
 * Записываем токен доступа в базу
 */
const createToken = async (user: User, ctx: PrismaContext) => {
  const Token = await ctx.prisma.token.create({
    data: {
      User: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  const tokenData: AuthTokenData = {
    tokenId: Token.id,
  }

  const token = jwt.sign(tokenData, ctx.APP_SECRET)

  return token
}

/**
 * Регистрация
 */
export const signup: FieldResolver<'Mutation', 'signup'> = async (
  _,
  args,
  ctx
) => {
  const {
    password: passwordProps,
    showEmail,
    showFullname,
    email,
    fullname,
    phone,
    username,
  } = args.data || {}

  const password = passwordProps
    ? await createPassword(passwordProps)
    : passwordProps

  /**
   * Подключаем сразу все настройки уведомлений
   */
  const NotificationType_UserNotificationTypesConnect: Prisma.NotificationTypeCreateNestedManyWithoutUser_UserNotificationTypesInput['connect'] =
    await (
      await ctx.prisma.notificationType.findMany()
    ).map((n) => {
      return {
        id: n.id,
      }
    })

  const createData: Prisma.UserCreateInput = {
    password,
    showEmail,
    showFullname,
    email,
    fullname,
    phone,
    username,
    NotificationType_UserNotificationTypes: {
      connect: NotificationType_UserNotificationTypesConnect,
    },
  }

  const user = await ctx.prisma.user.create({
    data: createData,
  })

  let token: string | undefined

  if (user) {
    token = await createToken(user, ctx)
  }

  return {
    success: !!user,
    errors: [],
    data: user,
    token,
  }
}

/**
 * Авторизация
 */
export const signin: FieldResolver<'Mutation', 'signin'> = async (
  _,
  args,
  ctx
) => {
  const { password } = args.data || {}

  if (!password) {
    throw new Error('Не указан пароль')
  }

  const where = args.where as Prisma.UserWhereUniqueInput

  const user = await ctx.prisma.user.findUnique({
    where,
  })

  let success = false
  let message = ''
  let result: NexusGenObjects['User'] | null = null
  let token: string | undefined

  if (!user) {
    message = 'Не был получен пользователь'
  } else if (
    !user.password ||
    !(await bcrypt.compare(password, user.password))
  ) {
    message = 'Неправильный пароль'
  } else {
    success = true
    result = user

    token = await createToken(user, ctx)
  }

  return {
    success,
    message,
    errors: [],
    token,
    data: result,
  }
}
