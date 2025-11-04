import { FieldResolver } from 'nexus'
import { openWebuiRequest } from '../helpers/openWebuiRequest'
import { hasWebUiProfile } from '../helpers/hasWebUiProfile'

export const createOpenWebUiUserResolver: FieldResolver<
  'Mutation',
  'createOpenWebUiUser'
> = async (_, { data: { password, email } }, { currentUser, prisma }) => {
  if (!currentUser) {
    throw new Error('Not authorized')
  }

  let user = currentUser

  if (!user.email) {
    if (!email) {
      throw new Error('Не указан email')
    }

    user = await prisma.user.update({
      data: { email, showEmail: false },
      where: {
        id: currentUser.id,
      },
    })
  }

  const exists = await hasWebUiProfile(user, true)

  if (exists) {
    throw new Error('У вас уже есть подключеный профиль')
  }

  if (!user.email) {
    throw new Error('В профиле отсутствует емейл')
  }

  const body = {
    name: user.fullname,
    email: user.email,
    password,
    // profile_image_url: '/user.png',
    role: 'user',
  }

  const response: {
    id?: string
  } = await openWebuiRequest('/api/v1/auths/add', {
    method: 'POST',
    body,
  })

  if (!response.id) {
    throw new Error('Can not create open-webui profile')
  }

  return user
}
