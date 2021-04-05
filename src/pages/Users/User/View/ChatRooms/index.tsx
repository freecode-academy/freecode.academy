import React, { useCallback, useMemo } from 'react'

import { IconButton, Typography } from 'material-ui'
import useStore from 'src/hooks/useStore'
import { useCreateChatMessageProcessorMutation } from 'src/modules/gql/generated/createChatMessageProcessor'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { ChatMessageCreateInput } from 'src/modules/gql/generated'
import Grid from 'src/uikit/Grid'
import Editor from 'src/uikit/Editor'
import { UserChatRoomsProps } from './interfaces'
import SendIcon from 'material-ui-icons/Send'
import { useRouter } from 'next/router'

const UserChatRooms: React.FC<UserChatRoomsProps> = ({
  user,
  currentUser,
  // ...other
}) => {
  // static propTypes = {
  //   classes: PropTypes.object.isRequired,
  //   user: PropTypes.object.isRequired,
  //   currentUser: PropTypes.object,
  // };

  // static contextType = Context;

  // render() {

  const router = useRouter()

  const createChatMessageTupple = useCreateChatMessageProcessorMutation()

  const {
    snakbar,
    mutation: createChatMessageMutation,
    loading: inRequest,
  } = useProcessorMutation(createChatMessageTupple)

  const { store, setValue } = useStore<ChatMessageCreateInput>({})

  const createChatMessage = useCallback(() => {
    if (!store?.content || inRequest) {
      return
    }

    createChatMessageMutation({
      variables: {
        data: {
          ...store,
          Room: {
            to: user.id,
          },
        },
      },
    }).then((r) => {
      if (
        !(r instanceof Error) &&
        r.data?.response.success &&
        r.data.response.data
      ) {
        if (r.data.response.data.Room) {
          router.push(`/chat-rooms/${r.data.response.data.Room.id}`)
        } else {
          router.push(`/chat-messages/${r.data.response.data.id}`)
        }
      }
    })
  }, [createChatMessageMutation, inRequest, router, store, user.id])

  const onEditComment = useCallback(
    (content: ChatMessageCreateInput['content']) => {
      setValue('content', content)
    },
    [setValue]
  )

  const newMessage = useMemo(() => {
    if (!user) {
      return null
    }

    return (
      <Grid container>
        <Grid item xs>
          <Editor
            // className="topic-editor"
            editorKey="comment"
            value={store?.content || undefined}
            readOnly={false}
            // fullView={true}
            // allow_edit={allow_edit}
            onChange={onEditComment}
          />
        </Grid>

        <Grid item>
          <IconButton
            onClick={createChatMessage}
            disabled={inRequest}
            title="Отправить сообщение"
          >
            <SendIcon color={store?.content ? 'primary' : undefined} />
          </IconButton>
        </Grid>
      </Grid>
    )
  }, [createChatMessage, inRequest, onEditComment, store?.content, user])

  if (!user) {
    return null
  }

  const {
    id: userId,
    // username,
    // fullname,
  } = user

  const { id: currentUserId } = currentUser || {}

  let sendMessage

  if (!currentUserId || currentUserId !== userId) {
    sendMessage = (
      <div>
        <Typography variant="subheading">
          Отправить пользователю приватное сообщение
        </Typography>

        {newMessage}
      </div>
    )
  }

  return (
    <>
      {snakbar}

      {sendMessage}

      {/* <ChatRooms
        where={{
          Members_some: {
            id: userId,
          },
        }}
        title={`Чат-комнаты с пользоваелем ${fullname || username}`}
      /> */}
    </>
  )
}

export default UserChatRooms
