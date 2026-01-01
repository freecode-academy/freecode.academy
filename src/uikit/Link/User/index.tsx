import React from 'react'
import { Avatar } from 'src/uikit/Avatar'
import { UikitUserLinkProps } from './interfaces'
import {
  UserLinkContainer,
  AvatarLink,
  NameContainer,
  NameLink,
  PositionText,
} from './styles'

export * from './interfaces'

export function createUserLink(user: UikitUserLinkProps['user']): string {
  const { id, username } = user

  return username ? `/profile/${username}` : `/profile/id/${id}`
}

export const UserLink: React.FC<UikitUserLinkProps> = ({
  user,
  withAvatar = true,
  secondary,
  showName = true,
  size = 'normal',
  avatarProps,
  className,
  position,
  onClick,
}) => {
  if (!user) {
    return null
  }

  const { username, fullname } = user
  const name = fullname || username
  const url = createUserLink(user)

  const avatarElement = withAvatar ? (
    <AvatarLink
      href={url}
      title={fullname || username || undefined}
      onClick={onClick}
    >
      <Avatar
        user={user}
        size={size}
        {...avatarProps}
        className={['avatar-inline', `avatar-size--${size}`, className]
          .filter(Boolean)
          .join(' ')}
      />
    </AvatarLink>
  ) : null

  if (!showName && !withAvatar) {
    return null
  }

  return (
    <UserLinkContainer>
      {avatarElement}
      {showName && (
        <NameContainer>
          <NameLink href={url} $size={size} onClick={onClick}>
            {name}
            {position && <PositionText> - {position}</PositionText>}
          </NameLink>
          {secondary}
        </NameContainer>
      )}
    </UserLinkContainer>
  )
}
