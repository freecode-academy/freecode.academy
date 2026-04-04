import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createPassword } from './helpers/createPassword'
import { sanitizeTelegram } from './helpers/sanitizeTelegram'
import { checkUserUniqueness } from './helpers/checkUserUniqueness'

export const updateUserProcessor: FieldResolver<
  'Mutation',
  'updateUserProcessor'
> = async (_, args, ctx) => {
  const currentUser = ctx.currentUser

  if (!currentUser) {
    throw new Error('Access denied')
  }

  const {
    data: {
      password,
      // acceptChatMessageOldAnonymous,
      // acceptNewChatRoom,
      // acceptNewChatRoomAnonymous,
      address,
      email,
      fullname,
      image,
      phone,
      username,
      // NotificationTypes,
      technologyLevel,
      isMentor,
      // about,
      telegram,
    },
  } = args

  const uniquenessCheck = await checkUserUniqueness({
    prisma: ctx.prisma,
    username: username ?? undefined,
    email: email ?? undefined,
    excludeUserId: currentUser.id,
  })

  if (!uniquenessCheck.isUnique) {
    throw new Error(uniquenessCheck.error)
  }

  const passwordUpdate = password ? await createPassword(password) : undefined

  // const NotificationTypes_UserNotificationTypes = NotificationTypes as
  //   | Pick<
  //       Prisma.NotificationTypeUpdateManyWithoutUser_UserNotificationTypesNestedInput,
  //       'connect' | 'disconnect'
  //     >
  //   | undefined

  const data: Prisma.UserUpdateInput = {
    password: passwordUpdate,
    // acceptChatMessageOldAnonymous,
    // acceptNewChatRoom,
    // acceptNewChatRoomAnonymous,
    address,
    email,
    fullname,
    image,
    phone,
    username,
    technologyLevel,
    // NotificationTypes_UserNotificationTypes,
    isMentor: isMentor !== null ? isMentor : undefined,
    // about: about as Prisma.UserUpdateInput['about'],
    telegram: sanitizeTelegram(telegram),
  }

  const user = ctx.prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data,
  })

  return {
    success: true,
    message: '',
    errors: [],
    data: user,
  }
}
