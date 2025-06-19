import React from 'react'
import { Typography } from 'material-ui'
import { MarkdownField } from 'src/components/MarkdownField'
import { UserFragment } from 'src/gql/generated'
import { UserAvatar } from 'src/uikit/Avatar'
import { UserPageViewRowStyled, UserPageViewStyled } from './styles'

type UserPageViewProps = {
  user: UserFragment
}

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  const { fullname, username, content } = user

  return (
    <UserPageViewStyled>
      <UserPageViewRowStyled>
        <UserAvatar size="big" user={user} />

        <Typography variant="title">{fullname || username}</Typography>
      </UserPageViewRowStyled>

      <MarkdownField>{content}</MarkdownField>
    </UserPageViewStyled>
  )
}
