import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

export const ChatWidgetContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
`

export const ChatButton = styled.button<{ $isOpen?: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #ff6d5a;
  border: none;
  cursor: pointer;
  display: ${({ $isOpen }) => ($isOpen ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 109, 90, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(255, 109, 90, 0.5);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
    display: block;
  }
`

export const ChatWindow = styled.div<{ $isExpanded?: boolean }>`
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 20px;
  width: ${({ $isExpanded }) => ($isExpanded ? '100vw' : '380px')};
  height: ${({ $isExpanded }) =>
    $isExpanded ? '100%' : 'min(500px, calc(100vh - 80px))'};
  max-height: calc(100vh - 80px);
  background: #1a1a2e;
  border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '16px')};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease-out;

  ${({ $isExpanded }) =>
    $isExpanded &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-height: 100%;
    `}

  @media (max-width: 480px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
`

export const ChatHeader = styled.div`
  padding: 16px 20px;
  background: #252540;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
`

export const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0a0a0;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ExpandButton = styled(HeaderButton)`
  @media (max-width: 480px) {
    display: none;
  }
`

export const CloseButton = styled(HeaderButton)``

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`

export const Message = styled.div<{ $isUser?: boolean }>`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 0.875rem;
  line-height: 1.5;
  align-self: ${({ $isUser }) => ($isUser ? 'flex-end' : 'flex-start')};
  background: ${({ $isUser }) => ($isUser ? '#ff6d5a' : '#252540')};
  color: ${({ $isUser }) => ($isUser ? '#fff' : '#e0e0e0')};
  border-bottom-right-radius: ${({ $isUser }) => ($isUser ? '4px' : '16px')};
  border-bottom-left-radius: ${({ $isUser }) => ($isUser ? '16px' : '4px')};
`

export const ChatInputContainer = styled.div`
  padding: 12px;
  background: #252540;
  border-top: 1px solid #333;
`

export const ChatInputWrapper = styled.form`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const ChatTextarea = styled.textarea`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #333;
  border-radius: 12px;
  background: #1a1a2e;
  color: #fff;
  font-size: 0.875rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  resize: none;
  min-height: 66px;
  max-height: 35vh;
  line-height: 1.4;

  &:focus {
    border-color: #ff6d5a;
  }

  &::placeholder {
    color: #666;
  }
`

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #ff6d5a;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #ff5a45;
  }

  &:disabled {
    background: #444;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }
`

export const TypingIndicator = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  align-self: flex-start;
  background: #252540;
  border-radius: 16px;
  border-bottom-left-radius: 4px;

  span {
    width: 8px;
    height: 8px;
    background: #666;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`

export const WelcomeMessage = styled.div`
  text-align: center;
  padding: 24px;
  color: #a0a0a0;
  font-size: 0.875rem;
  line-height: 1.6;

  h4 {
    color: #fff;
    margin: 0 0 8px;
    font-size: 1rem;
  }
`
