import { NexusGenRootTypes } from 'server/nexus/generated/nexus'

type formatUserDataProps = {
  user: NexusGenRootTypes['User']
}

export function formatUserData({ user }: formatUserDataProps) {
  const { id, username, fullname, sudo, active, createdAt } = user

  return {
    id,
    username,
    fullname,
    sudo,
    active,
    createdAt,
    url: username ? `/profile/${username}` : `/profile/id/${id}`,
  }
}
