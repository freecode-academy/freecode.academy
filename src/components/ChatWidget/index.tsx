import React, { useState, useCallback } from 'react'
import { ChatWidgetContainer, ChatButton } from './styles'
import { ChatMessage } from './interfaces'
import dynamic from 'next/dynamic'
import { useSnackbar } from 'src/ui-kit/Snackbar/context'

const ChatModal = dynamic(
  () => import('./ChatModal').then((r) => r.ChatModal),
  {
    ssr: false,
  }
)

export type ChatWidgetProps = {
  onSendMessage?: (message: string) => Promise<string>
  welcomeTitle?: string
  welcomeText?: string
  placeholder?: string
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  onSendMessage,
  welcomeTitle = 'Hi! How can I help?',
  welcomeText = 'Ask me anything about n8n-selfhost.dev project.',
  placeholder = 'Type your message...',
}) => {
  const snackbar = useSnackbar()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setIsExpanded(false)
  }, [])

  const handleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const handleToggle = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    setIsOpen((prev) => !prev)
  }, [])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const submitMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading) {
      return
    }

    const messageText = inputValue.trim()

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: messageText,
        isUser: true,
      },
    ])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = onSendMessage
        ? await onSendMessage(messageText)
        : 'This is a demo response. Connect to MCP server for real responses.'

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: response,
          isUser: false,
        },
      ])
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'
      snackbar?.addMessage(errorMessage, { variant: 'error' })
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: 'Sorry, something went wrong. Please try again.',
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, isLoading, onSendMessage, snackbar])

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      submitMessage()
    },
    [submitMessage]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault()
        submitMessage()
      }
    },
    [submitMessage]
  )

  return (
    <ChatWidgetContainer>
      {isOpen && (
        <ChatModal
          isExpanded={isExpanded}
          messages={messages}
          inputValue={inputValue}
          isLoading={isLoading}
          welcomeTitle={welcomeTitle}
          welcomeText={welcomeText}
          placeholder={placeholder}
          onClose={handleClose}
          onExpand={handleExpand}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onSubmit={handleFormSubmit}
        />
      )}

      <ChatButton onClick={handleToggle} $isOpen={isOpen} type="button">
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </ChatButton>
    </ChatWidgetContainer>
  )
}
