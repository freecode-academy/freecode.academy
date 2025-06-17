import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { createPassword, createToken } from '../helpers'
import { createActivity } from '../../../Activity/helpers/createActivity'

export async function createUser(
  data: Prisma.UserCreateInput,
  ctx: PrismaContext
) {
  const {
    password: passwordProps,
    // showEmail,
    // showFullname,
    // email,
    // fullname,
    // phone,
    // username,
  } = data

  // if (!passwordProps) {
  //   throw new Error('Укажите пароль')
  // }

  const password = await createPassword(passwordProps)

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
    ...data,
    password,
    // showEmail,
    // showFullname,
    // email,
    // fullname,
    // phone,
    // username,
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

    createActivity({
      ctx,
      userId: user.id,
      payload: {
        type: 'UserCreated',
        user,
      },
    })
  }

  return {
    success: !!user,
    errors: [],
    data: user,
    token,
  }
}
