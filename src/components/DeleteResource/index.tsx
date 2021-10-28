import React, { useCallback } from 'react'
import { IconButton } from 'material-ui'
import DeleteIcon from 'material-ui-icons/Delete'
import { useDeleteResourceMutation } from 'src/modules/gql/generated'
import { DeleteResourceProps } from './interfaces'

/**
 * Удаление ресурса
 */
export const DeleteResource: React.FC<DeleteResourceProps> = ({
  resource,
  ...other
}) => {
  const mutation = useDeleteResourceMutation({
    variables: {
      where: {
        id: resource.id,
      },
    },
  })

  const onClick = useCallback(() => {
    if (window.confirm('Удалить ресурс безвозвратно?')) {
      mutation[0]().then((r) => {
        if (r.data?.deleteResource) {
          mutation[1].client.resetStore().catch(console.error)
        }
      })
    }
  }, [mutation])

  if (!resource.id) {
    return null
  }

  return (
    <IconButton
      title="Удалить"
      disabled={mutation[1].loading}
      onClick={onClick}
      {...other}
    >
      <DeleteIcon />
    </IconButton>
  )
}
