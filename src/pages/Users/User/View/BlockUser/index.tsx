import React, { useCallback } from 'react'
import { IconButton } from 'material-ui'
import BlockIcon from 'material-ui-icons/Block'
import {
  useBlockUserMutation,
  useUnblockUserMutation,
} from 'src/modules/gql/generated'
import { BlockUserProps } from './interfaces'

/**
 * Блокировка пользователя
 */
export const BlockUser: React.FC<BlockUserProps> = ({ user }) => {
  const blockMutation = useBlockUserMutation({
    variables: {
      where: {
        id: user.id,
      },
    },
  })

  const unblockMutation = useUnblockUserMutation({
    variables: {
      where: {
        id: user.id,
      },
    },
  })

  const blockUser = useCallback(() => {
    blockMutation[0]().then((r) => {
      if (r) {
        try {
          blockMutation[1].client.resetStore()
        } catch (error) {
          console.error(error)
        }
      }
    })
  }, [blockMutation])

  const unblockUser = useCallback(() => {
    unblockMutation[0]().then((r) => {
      if (r) {
        try {
          unblockMutation[1].client.resetStore()
        } catch (error) {
          console.error(error)
        }
      }
    })
  }, [unblockMutation])

  return (
    <>
      <IconButton
        disabled={blockMutation[1].loading || unblockMutation[1].loading}
        onClick={user.blocked ? unblockUser : blockUser}
        title={
          user.blocked
            ? 'Разблокировать пользователя'
            : 'Заблокировать пользователя'
        }
      >
        <BlockIcon color={user.blocked ? 'secondary' : undefined} />
      </IconButton>
    </>
  )
}
