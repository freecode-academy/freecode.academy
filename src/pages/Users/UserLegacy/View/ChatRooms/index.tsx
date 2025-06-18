import React from 'react'

import { Typography } from 'material-ui'
// import useStore from 'src/hooks/useStore'
// import { useCreateChatMessageOldProcessorMutation } from 'src/gql/generated/createChatMessageOldProcessor'
// import useProcessorMutation from 'src/hooks/useProcessorMutation'
// import { ChatMessageOldCreateInput } from 'src/gql/generated'
// import Grid from 'src/uikit/Grid'
// import Editor from 'src/uikit/Editor'
import { UserChatRoomsProps } from './interfaces'
// import SendIcon from 'material-ui-icons/Send'
// import { useRouter } from 'next/router'

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

  // const router = useRouter()

  // const createChatMessageOldTupple = useCreateChatMessageOldProcessorMutation()

  // const {
  //   snakbar,
  //   mutation: createChatMessageOldMutation,
  //   loading: inRequest,
  // } = useProcessorMutation(createChatMessageOldTupple)

  // const { store, setValue } = useStore<ChatMessageOldCreateInput>({})

  // const createChatMessageOld = useCallback(() => {
  //   if (!store?.content || inRequest) {
  //     return
  //   }

  //   createChatMessageOldMutation({
  //     variables: {
  //       data: {
  //         ...store,
  //         // TODO Restore rooms logic
  //         // @ts-expect-error types
  //         Room: {
  //           to: user.id,
  //         },
  //       },
  //     },
  //   }).then((r) => {
  //     if (
  //       !(r instanceof Error) &&
  //       r.data?.response.success &&
  //       r.data.response.data
  //     ) {
  //       if (r.data.response.data.Room) {
  //         router.push(`/chat-rooms/${r.data.response.data.Room.id}`)
  //       } else {
  //         router.push(`/chat-messages/${r.data.response.data.id}`)
  //       }
  //     }
  //   })
  // }, [createChatMessageOldMutation, inRequest, router, store, user.id])

  // const onEditComment = useCallback(
  //   (content: ChatMessageOldCreateInput['content']) => {
  //     setValue('content', content)
  //   },
  //   [setValue]
  // )

  // const newMessage = useMemo(() => {
  //   if (!user) {
  //     return null
  //   }

  //   return (
  //     <Grid container>
  //       <Grid item xs>
  //         <Editor
  //           // className="topic-editor"
  //           editorKey="comment"
  //           // @ts-expect-error types
  //           value={store?.content || undefined}
  //           readOnly={false}
  //           // fullView={true}
  //           // allow_edit={allow_edit}
  //           onChange={onEditComment}
  //         />
  //       </Grid>

  //       <Grid item>
  //         <IconButton
  //           onClick={createChatMessageOld}
  //           disabled={inRequest}
  //           title="Отправить сообщение"
  //         >
  //           <SendIcon color={store?.content ? 'primary' : undefined} />
  //         </IconButton>
  //       </Grid>
  //     </Grid>
  //   )
  // }, [createChatMessageOld, inRequest, onEditComment, store?.content, user])

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
    // TODO Restore
    // newMessage
    Typography

    // sendMessage = (
    //   <div>
    //     <Typography variant="subheading">
    //       Отправить пользователю приватное сообщение
    //     </Typography>

    //     {newMessage}
    //   </div>
    // )

    return <></>
  }

  return (
    <>
      {/* {snakbar} */}

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
