import React from 'react'
import { Typography } from 'material-ui'
import { MarkdownField } from 'src/components/MarkdownField'
import { UserFragment } from 'src/gql/generated'
import { Avatar } from 'src/uikit/Avatar'
import { UserPageViewRowStyled, UserPageViewStyled } from './styles'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import { ConnectTelegram } from './ConnectTelegram'

type UserPageViewProps = {
  user: UserFragment
}

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  const { fullname, username, content } = user

  const { user: currentUser } = useCurrentUser()

  return (
    <UserPageViewStyled>
      <UserPageViewRowStyled>
        <Avatar size="big" user={user} />

        <Typography variant="title">{fullname || username}</Typography>
      </UserPageViewRowStyled>

      {currentUser?.id === user.id && !currentUser.TelegramAccount && (
        <ConnectTelegram />
      )}

      <MarkdownField>{content}</MarkdownField>
    </UserPageViewStyled>
  )
}
