import React, { useCallback } from 'react'
import { useChat } from 'src/Chat/hooks/useChat'
import styled from 'styled-components'

const Hero = styled.section`
  padding: 3rem 1.5rem;
  text-align: center;
  color: #212529;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin: 1rem;

  @media (min-width: 768px) {
    padding: 4.5rem 2.5rem;
    margin: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #343a40;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 650px;
  margin-bottom: 2rem;
  color: #495057;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

const ChatButton = styled.button`
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border: none;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);

  &:hover {
    background: linear-gradient(90deg, #0069d9, #004494);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4);
    transform: translateY(-1px);
  }

  svg {
    margin-right: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    fill: currentColor;
  }
`

export function HeroSection() {
  const { sendChatMessage, textSetter, loading } = useChat()

  const onClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.preventDefault()
      event.stopPropagation()

      textSetter(`Привет! Расскажи коротко что и как.`)

      sendChatMessage()
    },
    [sendChatMessage, textSetter]
  )

  return (
    <Hero>
      <Title>
        Привет! Начни чат с нашим AI-ботом прямо сейчас{' '}
        <span style={{ fontSize: '1.1em' }}>🚀</span>
      </Title>
      <Subtitle>
        Один разговор — и ты учишься, прокачиваешь профиль и получаешь фидбек от
        гуру JS/ИИ. Без лишних кликов, меню и поисков. Просто начни чат и
        погнали!
      </Subtitle>
      <ChatButton onClick={onClick} disabled={loading}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16v12H5.17L4 17.17V4z" fill="currentColor" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
        </svg>
        Начать чат
      </ChatButton>
    </Hero>
  )
}
