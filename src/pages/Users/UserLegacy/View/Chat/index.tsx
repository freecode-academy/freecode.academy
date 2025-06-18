import { useCallback, useMemo, useState } from 'react'
import { OpenAiChatStyled } from './styles'
import { AiMessage } from './Message'
import {
  ChatMessageOldFragment,
  MeUserFragment,
  UserFragment,
} from 'src/gql/generated'

type PrivateChatProps = {
  user: UserFragment
  currentUser: MeUserFragment
}

export const PrivateChat: React.FC<PrivateChatProps> = ({
  currentUser,
  user,
  ...other
}) => {
  const [messagesStore, setMessages] = useState<ChatMessageOldFragment[]>([])

  const messages = useMemo(() => [...messagesStore].reverse(), [messagesStore])

  const [newMessage, newMessageSetter] = useState<string>('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    newMessageSetter(value)
  }, [])

  return (
    <OpenAiChatStyled {...other}>
      <AiMessage
        key="new-message"
        type="user"
        message={newMessage}
        isNew
        onChange={onChange}
        setMessages={setMessages}
        newMessageSetter={newMessageSetter}
        user={user}
      />

      {messages.map((n, index) => (
        <AiMessage
          key={index}
          message={n}
          isNew={false}
          user={user}
          type={n.CreatedBy?.id === currentUser.id ? 'user' : 'assistant'}
        />
      ))}
    </OpenAiChatStyled>
  )
}
