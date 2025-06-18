import { Dispatch, SetStateAction } from 'react'
import {
  ChatMessageOldFragment,
  // useCreateChatMessageOldProcessorMutation,
  UserFragment,
} from 'src/gql/generated'
import { ChatMessageOldType } from './interfaces'
import {
  AiMessageContentStyled,
  // AiMessageInputStyled,
  AiMessageFormStyled,
} from './styles'

type AiMessageProps = {
  user: UserFragment
  // currentUser: MeUserFragment
  type: ChatMessageOldType
} & (
  | {
      isNew: true
      message: string
      onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      setMessages: Dispatch<SetStateAction<ChatMessageOldFragment[]>>
      newMessageSetter: Dispatch<SetStateAction<string>>
    }
  | {
      isNew: false
      message: ChatMessageOldFragment
      onChange?: never
      setMessages?: never
      newMessageSetter?: never
    }
)

export const AiMessage: React.FC<AiMessageProps> = ({
  message,
  type,
  isNew,
  // onChange,
  // setMessages,
  // newMessageSetter,
  // user,
  // currentUser,
  ...other
}) => {
  // const [createChatMessageOld, { loading: inRequest }] =
  //   useCreateChatMessageOldProcessorMutation({})

  // const inputRef = useRef<HTMLTextAreaElement | null>(null)

  // const onSubmit = useMemo<React.FormEventHandler | undefined>(() => {
  //   if (!isNew) {
  //     return
  //   }

  //   return (event) => {
  //     event.preventDefault()
  //     // newMessageSetter((message) => {
  //     const messageText = inputRef.current?.value

  //     if (!messageText) {
  //       alert('Message is empty')
  //     }

  //     createChatMessageOld({
  //       variables: {
  //         data: {
  //           content: messageText ?? '',
  //           toUser: {
  //             id: user.id,
  //           },
  //         },
  //       },
  //     })
  //       .then((response) => {
  //         const openAiResponse = response.data?.response

  //         const responseMessage = openAiResponse?.data
  //         const responseMessageReply = openAiResponse?.reply

  //         if (responseMessage) {
  //           newMessageSetter('')

  //           setMessages((prev) => {
  //             const messages = [...prev, responseMessage]

  //             if (responseMessageReply) {
  //               messages.push(responseMessageReply)
  //             }

  //             return messages
  //           })
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('error', error)
  //         alert(error.message)
  //       })

  //     //   return message
  //     // })
  //   }
  // }, [createChatMessageOld, isNew, newMessageSetter, setMessages, user.id])

  return (
    // @ts-expect-error types
    <AiMessageFormStyled
      type={type}
      // onSubmit={onSubmit}
      {...other}
    >
      <AiMessageContentStyled>
        {/* {isNew ? (
          <AiMessageInputStyled
            ref={inputRef}
            value={message}
            onChange={onChange}
            disabled={inRequest}
          />
        ) : (
          message.contentText
        )} */}
        {isNew ? null : message.contentText}
      </AiMessageContentStyled>

      {/* {isNew && (
        <button type="submit" disabled={inRequest}>
          Send
        </button>
      )} */}
    </AiMessageFormStyled>
  )
}
