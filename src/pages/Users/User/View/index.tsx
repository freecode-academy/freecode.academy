import React from 'react'
import { UserFragment } from 'src/gql/generated'

type UserPageViewProps = {
  user: UserFragment
}

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  const { id } = user

  return <>{id}</>
}
