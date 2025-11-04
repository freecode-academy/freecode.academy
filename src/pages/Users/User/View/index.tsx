import React from 'react'
import { Typography } from 'material-ui'
import { Markdown } from 'src/components/Markdown'
import { UserFragment } from 'src/gql/generated'
import { UserAvatar } from 'src/uikit/Avatar'
import { UserPageViewRowStyled, UserPageViewStyled } from './styles'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import { ConnectTelegram } from './ConnectTelegram'
import dynamic from 'next/dynamic'

const OpenWebUi = dynamic(
  () => import('./OpenWebUi').then((r) => r.OpenWebUi),
  {
    ssr: false,
  }
)

type UserPageViewProps = {
  user: UserFragment
}

export const UserPageView: React.FC<UserPageViewProps> = ({ user }) => {
  const { fullname, username, content } = user

  const { user: currentUser } = useCurrentUser()

  return (
    <UserPageViewStyled>
      <UserPageViewRowStyled>
        <UserAvatar size="big" user={user} />

        <Typography variant="title">{fullname || username}</Typography>
      </UserPageViewRowStyled>

      {currentUser?.id === user.id && (
        <>
          {!currentUser.TelegramAccount && <ConnectTelegram />}

          <OpenWebUi currentUser={currentUser} />
        </>
      )}

      <Markdown>{content}</Markdown>
    </UserPageViewStyled>
  )
}
