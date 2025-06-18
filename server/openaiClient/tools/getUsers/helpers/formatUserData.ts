import { NexusGenRootTypes } from 'server/nexus/generated/nexus'

type formatUserDataProps = {
  user: NexusGenRootTypes['User']
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
    url: username ? `/profile/${username}` : `/profile/id/${id}`,
  }
}
