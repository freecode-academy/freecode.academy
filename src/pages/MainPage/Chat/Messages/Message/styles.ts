import { minWidth } from 'src/theme/helpers'
import styled, { css } from 'styled-components'

export const ChatMessageContentStyled = styled.div``

interface ChatMessageStyledProps {
  isUser: boolean
}

export const ChatMessageStyled = styled.div<ChatMessageStyledProps>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  padding: 10px;

  p {
    margin-top: 2px;
    margin-bottom: 2px;
  }

  ${ChatMessageContentStyled} {
    max-width: 90%;
    padding: 4px 6px;
    border-radius: 8px;
    background-color: ${(props) => (props.isUser ? '#007bff' : '#f1f1f1')};
    color: ${(props) => (props.isUser ? '#fff' : '#333')};
  }

  ${minWidth.lg(css`
    padding: 20px;

    p {
      margin-top: 4px;
      margin-bottom: 4px;
    }

    ${ChatMessageContentStyled} {
      max-width: 70%;
      padding: 12px 15px;
      border-radius: 8px;
    }
  `)}
`
