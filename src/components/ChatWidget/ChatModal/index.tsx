import React, { useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import {
  ChatWindow,
  ChatHeader,
  ChatTitle,
  HeaderButtons,
  ExpandButton,
  CloseButton,
  ChatMessages,
  Message,
  ChatInputContainer,
  ChatInputWrapper,
  ChatTextarea,
  SendButton,
  TypingIndicator,
  WelcomeMessage,
} from '../styles'
import { ChatMessage } from '../interfaces'
import { Markdown } from 'src/components/Markdown'

export type ChatModalProps = {
  isExpanded: boolean
  messages: ChatMessage[]
  inputValue: string
  isLoading: boolean
  welcomeTitle: string
  welcomeText: string
  placeholder: string
  onClose: () => void
  onExpand: () => void
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export const ChatModal: React.FC<ChatModalProps> = ({
  isExpanded,
  messages,
  inputValue,
  isLoading,
  welcomeTitle,
  welcomeText,
  placeholder,
  onClose,
  onExpand,
  onInputChange,
  onKeyDown,
  onSubmit,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(
        textarea.scrollHeight,
        window.innerHeight * 0.35
      )}px`
    }
  }, [])

  useEffect(() => {
    adjustTextareaHeight()
  }, [inputValue, adjustTextareaHeight])

  const stopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation()
  }, [])

  const modalContent = (
    <ChatWindow
      $isExpanded={isExpanded}
      onClick={stopPropagation}
      onMouseDown={stopPropagation}
      onWheel={stopPropagation}
      onTouchStart={stopPropagation}
      onTouchMove={stopPropagation}
    >
      <ChatHeader>
        <ChatTitle>AI Assistant</ChatTitle>
        <HeaderButtons>
          <ExpandButton onClick={onExpand}>
            {isExpanded ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </ExpandButton>
          <CloseButton onClick={onClose}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </CloseButton>
        </HeaderButtons>
      </ChatHeader>

      <ChatMessages>
        {messages.length === 0 && (
          <WelcomeMessage>
            <h4>{welcomeTitle}</h4>
            <p>{welcomeText}</p>
          </WelcomeMessage>
        )}
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

      <ChatInputContainer>
        <ChatInputWrapper onSubmit={onSubmit}>
          <ChatTextarea
            ref={textareaRef}
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            placeholder={`${placeholder} (Ctrl+Enter to send)`}
            disabled={isLoading}
            rows={1}
          />
          <SendButton type="submit" disabled={!inputValue.trim() || isLoading}>
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </SendButton>
        </ChatInputWrapper>
      </ChatInputContainer>
    </ChatWindow>
  )

  return createPortal(modalContent, global.document.body)
}
