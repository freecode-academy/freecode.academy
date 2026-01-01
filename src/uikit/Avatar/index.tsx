import React from 'react'
import { UserAvatarProps } from './interfaces'
import { AvatarStyled } from './styles'

export * from './interfaces'

export const Avatar: React.FC<UserAvatarProps> = ({
  user,
  size = 'normal',
  editable = false,
  className,
}) => {
  if (!user) {
    return null
  }

  const { image, username, fullname } = user
  const name = fullname || username || ''

  let url
  if (image) {
    url = `/images/resized/thumb/${image}`
  }

  return (
    <AvatarStyled $size={size} $editable={editable} className={className}>
      {url ? (
        <img src={url} alt={name} />
      ) : (
        (name && name.substring(0, 1).toUpperCase()) || 'A'
      )}
    </AvatarStyled>
  )
}
