import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ChatForm, ChatTextarea, SendButton } from '../styles'
import { useChatContext } from '../context'

export const ChatInputForm: React.FC = () => {
  const { placeholder, isLoading, submitMessage } = useChatContext()
  const [inputValue, setInputValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

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

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault()
        const message = inputValue.trim()
        if (message && !isLoading) {
          submitMessage(message)
          setInputValue('')
        }
      }
    },
    [inputValue, isLoading, submitMessage]
  )

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const message = inputValue.trim()
      if (message && !isLoading) {
        submitMessage(message)
        setInputValue('')
      }
    },
    [inputValue, isLoading, submitMessage]
  )

  return (
    <ChatForm onSubmit={handleFormSubmit}>
      <ChatTextarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={isLoading}
        rows={1}
      />
      <SendButton type="submit" $hasText={!!inputValue.trim()}>
        <svg viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </SendButton>
    </ChatForm>
  )
}
