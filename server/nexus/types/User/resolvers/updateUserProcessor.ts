import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createPassword } from '.'

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
      acceptChatMessageAnonymous,
      acceptNewChatRoom,
      acceptNewChatRoomAnonymous,
      address,
      email,
      fullname,
      image,
      phone,
      username,
      NotificationTypes,
      technologyLevel,
    },
  } = args

  const passwordUpdate = password ? await createPassword(password) : undefined

  const NotificationType_UserNotificationTypes = NotificationTypes as
    | Pick<
        Prisma.NotificationTypeUpdateManyWithoutUser_UserNotificationTypesInput,
        'connect' | 'disconnect'
      >
    | undefined

  const data: Prisma.UserUpdateInput = {
    password: passwordUpdate,
    acceptChatMessageAnonymous,
    acceptNewChatRoom,
    acceptNewChatRoomAnonymous,
    address,
    email,
    fullname,
    image,
    phone,
    username,
    technologyLevel,
    NotificationType_UserNotificationTypes,
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
