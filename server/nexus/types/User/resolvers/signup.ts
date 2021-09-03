import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'
import { createPassword, createToken } from '.'

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
    NotificationTypes_UserNotificationTypes: {
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
