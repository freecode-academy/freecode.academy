import React from 'react'
import moment from 'moment'
import Editor from 'src/uikit/Editor'
import Grid from 'src/uikit/Grid'
import ChatRoomLink from 'src/uikit/Link/ChatRoom'
import UikitUserLink from 'src/uikit/Link/User'
import { UiChatMessageOldProps } from './interfaces'
import { UiChatMessageOldStyled } from './styles'
import Link from 'next/link'

export * from './interfaces'

const UiChatMessageOld: React.FC<UiChatMessageOldProps> = (props) => {
  const object = props.object

  if (!object) {
    return null
  }

  const { id, createdAt, CreatedBy, content, Room } = object

  return (
    <UiChatMessageOldStyled>
      <Grid container spacing={8} alignItems="center">
        <Grid item>
          {CreatedBy ? (
            <UikitUserLink user={CreatedBy} showName={false} />
          ) : null}
        </Grid>

        <Grid item xs>
          <Grid container spacing={8} alignItems="center">
            <Grid item>
              {CreatedBy ? (
                <UikitUserLink user={CreatedBy} withAvatar={false} />
              ) : null}
            </Grid>
            <Grid item xs>
              {id && createdAt ? (
                <Link href={`/chat-messages/${id}`}>
                  {moment(createdAt).format('lll')}
                </Link>
              ) : null}
            </Grid>
            <Grid item>{Room ? <ChatRoomLink object={Room} /> : null}</Grid>
          </Grid>

          <Editor editorKey="chat-message-editor" value={content} />
        </Grid>
      </Grid>
    </UiChatMessageOldStyled>
  )
}

export default UiChatMessageOld
