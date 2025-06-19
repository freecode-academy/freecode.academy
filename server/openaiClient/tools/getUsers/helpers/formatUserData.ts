import { User } from '@prisma/client'

type formatUserDataProps = {
  user: User
}

export function formatUserData({ user }: formatUserDataProps) {
  const {
    id,
    username,
    fullname,
    sudo,
    active,
    about,
    intro,
    content,
    createdAt,
    rating,
  } = user

  return {
    id,
    username,
    fullname,
    sudo,
    active,
    about,
    intro,
    content,
    createdAt,
    rating,
    url: username ? `/profile/${username}` : `/profile/id/${id}`,
  }
}
