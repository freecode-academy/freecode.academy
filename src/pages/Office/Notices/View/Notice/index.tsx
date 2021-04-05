import { IconButton } from 'material-ui'
import React, { useCallback, useMemo } from 'react'
import { NoticeType } from 'src/modules/gql/generated'
import UiChatMessage from 'src/uikit/Chat/ChatMessage'
import { NoticeViewProps } from './interfaces'
import { NoticeViewHeaderStyled, NoticeViewStyled } from './styles'
import DoneIcon from 'material-ui-icons/Done'
import { useDeleteNoticeMutation } from 'src/modules/gql/generated/deleteNotice'

const NoticeView: React.FC<NoticeViewProps> = ({ notice, ...other }) => {
  const [deleteMutation, { loading, client }] = useDeleteNoticeMutation({
    variables: {
      where: {
        id: notice.id,
      },
    },
  })

  const deleteNotice = useCallback(() => {
    deleteMutation().then(() => {
      client.resetStore().catch(console.error)
    })
  }, [client, deleteMutation])

  return useMemo(() => {
    let content: JSX.Element | undefined
    let title: JSX.Element | string | undefined

    switch (notice.type) {
      case NoticeType.CHATMESSAGE:
        if (notice.ChatMessage) {
          title = `Сообщение в чате ${notice.ChatMessage.Room?.name}`

          content = <UiChatMessage object={notice.ChatMessage} />
        }

        break

      default:
    }

    if (!content) {
      return null
    }

    return (
      <NoticeViewStyled {...other}>
        <NoticeViewHeaderStyled>
          <h3 className="title">{title}</h3>

          <IconButton
            title="Удалить уведомление"
            disabled={loading}
            onClick={deleteNotice}
          >
            <DoneIcon color="primary" />
          </IconButton>
        </NoticeViewHeaderStyled>
        {content}
      </NoticeViewStyled>
    )
  }, [deleteNotice, loading, notice.ChatMessage, notice.type, other])
}

export default NoticeView
