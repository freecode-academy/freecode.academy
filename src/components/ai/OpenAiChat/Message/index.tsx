/* eslint-disable no-console */
import { Dispatch, SetStateAction, useMemo } from 'react'
import { useOpenAiMutation } from 'src/modules/gql/generated'
import { ChatMessage } from './interfaces'
import {
  AiMessageContentStyled,
  AiMessageInputStyled,
  AiMessageFormStyled,
} from './styles'

type AiMessageProps = {
  message: ChatMessage
} & (
  | {
      isNew: false
      onChange?: never
      setMessages?: never
      newMessageSetter?: never
    }
  | {
      isNew: true
      onChange: React.ChangeEventHandler<HTMLInputElement>
      setMessages: Dispatch<SetStateAction<ChatMessage[]>>
      newMessageSetter: Dispatch<SetStateAction<ChatMessage>>
    }
)

export const AiMessage: React.FC<AiMessageProps> = ({
  message,
  isNew,
  onChange,
  setMessages,
  newMessageSetter,
  ...other
}) => {
  const [sendMessageToOpenAi, { loading: inRequest }] = useOpenAiMutation({})

  console.log('isNew', isNew, typeof isNew)
  console.log('inRequest', inRequest)

  const onSubmit = useMemo<React.FormEventHandler | undefined>(() => {
    if (!isNew) {
      return
    }

    return (event) => {
      event.preventDefault()
      newMessageSetter((message) => {
        const messageText = message.text

        sendMessageToOpenAi({
          variables: {
            query: messageText,
          },
        })
          .then((response) => {
            const openAiResponse = response.data?.openAi

            const responseMessage = openAiResponse

            if (responseMessage) {
              newMessageSetter(() => ({
                type: 'user',
                text: '',
              }))

              setMessages((prev) => [
                ...prev,
                message,
                {
                  type: 'assistant',
                  text: responseMessage,
                },
              ])
            }
          })
          .catch((error) => {
            console.error('error', error)
            alert(error.message)
          })

        return message
      })
    }
  }, [isNew, newMessageSetter, sendMessageToOpenAi, setMessages])

  return (
    <AiMessageFormStyled type={message.type} onSubmit={onSubmit} {...other}>
      <AiMessageContentStyled>
        {isNew ? (
          <AiMessageInputStyled
            value={message.text}
            onChange={onChange}
            disabled={inRequest}
          />
        ) : (
          message.text
        )}
      </AiMessageContentStyled>

      {isNew && (
        <button type="submit" disabled={inRequest}>
          Send
        </button>
      )}
    </AiMessageFormStyled>
  )
}
