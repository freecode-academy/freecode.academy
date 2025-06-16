import React, { useEffect, useRef } from 'react'
import { AiChatContentWrapperStyled, AiChatStyled } from './styles'
import { AiMessageItem } from './Message'
import { ChatMessageForm } from './MessageForm'
import { useAppContext } from 'src/AppContext'

type AiChatProps = {
  // user: AppContextValue['user']
}

export const AiChat: React.FC<AiChatProps> = ({ ...other }) => {
  const {
    appState: { chatMessages: messages },
    user,
  } = useAppContext()

  const messagesContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = messagesContainerRef.current

    if (!container) {
      return
    }

    // Плавный скролл к последнему сообщению
    setTimeout(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      })
    }, 100) // Небольшая задержка, чтобы дождаться отрисовки сообщения
  }, [messages])

  return !user ? null : (
    <AiChatStyled {...other}>
      <AiChatContentWrapperStyled ref={messagesContainerRef}>
        {messages.map((n) => (
          <AiMessageItem key={n.id} message={n} currentUser={user} />
        ))}
      </AiChatContentWrapperStyled>

      <ChatMessageForm variant="chat" />
    </AiChatStyled>
  )
}
