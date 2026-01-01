import React, { useRef, useEffect, useCallback } from 'react'
import {
  ChatContentContainer,
  ChatMessages,
  Message,
  ChatInputContainer,
  TypingIndicator,
  WelcomeMessage,
} from '../styles'
import { Markdown } from 'src/components/Markdown'
import { ChatInputForm } from '../ChatInputForm'
import { useChatContext } from '../context'

export const ChatContent: React.FC = () => {
  const { messages, isLoading, welcomeTitle, welcomeText } = useChatContext()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const hasMessages = messages.length > 0

  return (
    <ChatContentContainer $hasMessages={hasMessages}>
      {hasMessages ? (
        <ChatMessages>
          {messages.map((msg) => (
            <Message key={msg.id} $isUser={msg.isUser}>
              <Markdown>{msg.text}</Markdown>
            </Message>
          ))}
          {isLoading && (
            <TypingIndicator>
              <span />
              <span />
              <span />
            </TypingIndicator>
          )}
          <div ref={messagesEndRef} />
        </ChatMessages>
      ) : (
        <WelcomeMessage>
          <h4>{welcomeTitle}</h4>
          <p>{welcomeText}</p>
        </WelcomeMessage>
      )}

      <ChatInputContainer>
        <ChatInputForm />
      </ChatInputContainer>
    </ChatContentContainer>
  )
}
