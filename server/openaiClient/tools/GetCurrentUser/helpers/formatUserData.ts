import { User } from '@prisma/client'

type formatUserDataProps = {
  user: User
}

export function formatUserData({ user }: formatUserDataProps) {
  const { id, username, fullname, sudo, active, createdAt } = user

  const permissions: string[] = []

  if (sudo) {
    permissions.push(
      `Суперпользователь. Имеет право выполнять любые действия, включая обновление компаний и получать списки пользователей`
    )
  }

  return {
    id,
    username,
    fullname,
    sudo,
    active,
    createdAt,
    permissions,
  }
}
