import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { createToken } from '../helpers/createToken'
import { createPassword } from '../helpers/createPassword'
import { createActivity } from '../../../Activity/helpers/createActivity'
import { ActivityType } from '../../../Activity/interfaces'

export async function createUser(
  data: Prisma.UserCreateInput,
  ctx: PrismaContext
) {
  const {
    password: passwordProps,
    // showEmail,
    // showFullname,
    email,
    fullname,
    username,
    // phone,
  } = data

  // if (!passwordProps) {
  //   throw new Error('Укажите пароль')
  // }

  const password = await createPassword(passwordProps)

  /**
   * Подключаем сразу все настройки уведомлений
   */
  // const NotificationType_UserNotificationTypesConnect: Prisma.NotificationTypeCreateNestedManyWithoutUser_UserNotificationTypesInput['connect'] =
  //   await (
  //     await ctx.prisma.notificationType.findMany()
  //   ).map((n) => {
  //     return {
  //       id: n.id,
  //     }
  //   })

  const createData: Prisma.UserCreateInput = {
    ...data,
    password,
    // showEmail,
    // showFullname,
    email: email ? email.trim() : undefined,
    fullname: fullname ? fullname.trim() : undefined,
    username: username ? username.trim() : undefined,
    // phone,
    // NotificationTypes_UserNotificationTypes: {
    //   connect: NotificationType_UserNotificationTypesConnect,
    // },
  }

  const user = await ctx.prisma.user.create({
    data: createData,
    include: {
      TelegramAccount: true,
    },
  })

  let token: string | undefined

  if (user) {
    token = await createToken(user, ctx)

    createActivity({
      ctx,
      userId: user.id,
      payload: {
        type: ActivityType.UserCreated,
        user,
        toUserId: null,
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
