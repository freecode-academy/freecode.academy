import { useCallback, useState } from 'react'
import { OpenAiChatStyled } from './styles'
import { AiMessage } from './Message'
import { ChatMessage } from './Message/interfaces'

export const OpenAiChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const [newMessage, newMessageSetter] = useState<ChatMessage>({
    type: 'user',
    text: '',
  })

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    newMessageSetter((n) => {
      return {
        ...n,
        text: value,
      }
    })
  }, [])

  return (
    <OpenAiChatStyled>
      <AiMessage
        key="new-message"
        message={newMessage}
        isNew
        onChange={onChange}
        setMessages={setMessages}
        newMessageSetter={newMessageSetter}
      />

      {messages.reverse().map((n, index) => (
        <AiMessage key={index} message={n} isNew={false} />
      ))}
    </OpenAiChatStyled>
  )
}
