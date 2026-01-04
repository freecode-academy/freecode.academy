import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { ChatMessage } from '../interfaces'
import { useSnackbar } from 'src/ui-kit/Snackbar/context'

type ChatContextValue = {
  messages: ChatMessage[]
  isLoading: boolean
  isOpen: boolean
  isExpanded: boolean
  setIsOpen: (open: boolean) => void
  setIsExpanded: (expanded: boolean) => void
  submitMessage: (text: string) => Promise<void>
  handleClose: () => void
  handleExpand: () => void
  handleToggle: (event: React.MouseEvent) => void
  welcomeTitle: string
  welcomeText: string
  placeholder: string
}

const ChatContext = createContext<ChatContextValue | null>(null)

export const useChatContext = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider')
  }
  return context
}

type ChatProviderProps = {
  children: React.ReactNode
  onSendMessage?: (message: string) => Promise<string>
  welcomeTitle?: string
  welcomeText?: string
  placeholder?: string
}

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  onSendMessage,
  welcomeTitle = 'Hi! How can I help?',
  welcomeText = 'Ask me anything about Freecode Academy',
  placeholder = 'Type your message...',
}) => {
  const snackbar = useSnackbar()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
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

  const submitMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) {
        return
      }

      const messageText = text.trim()

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: messageText,
          isUser: true,
        },
      ])
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
    },
    [isLoading, onSendMessage, snackbar]
  )

  const value = useMemo<ChatContextValue>(
    () => ({
      messages,
      isLoading,
      isOpen,
      isExpanded,
      setIsOpen,
      setIsExpanded,
      submitMessage,
      handleClose,
      handleExpand,
      handleToggle,
      welcomeTitle,
      welcomeText,
      placeholder,
    }),
    [
      messages,
      isLoading,
      isOpen,
      isExpanded,
      submitMessage,
      handleClose,
      handleExpand,
      handleToggle,
      welcomeTitle,
      welcomeText,
      placeholder,
    ]
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
