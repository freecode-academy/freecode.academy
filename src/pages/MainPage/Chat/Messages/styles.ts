import styled, { css, keyframes } from 'styled-components'

type SendButtonStyledProps = {
  $inRequest: boolean
}

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const SendButtonStyled = styled.button<SendButtonStyledProps>`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  ${(props) =>
    props.$inRequest &&
    css`
      cursor: wait;
      background: linear-gradient(-45deg, rgb(9, 23, 216), rgb(192, 8, 242));
      background-size: 400% 400%;
      animation: ${gradientAnimation} 2s ease infinite;
    `}
`

export const ChatInputStyled = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 14px;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  font-family: inherit;

  &::placeholder {
    color: #aaa;
  }
`

interface ChatMessagesStyledProps {
  isEmpty: boolean
}

export const ChatMessagesStyled = styled.div<ChatMessagesStyledProps>`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e1e4e8;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 300px;

  ${(props) =>
    props.isEmpty &&
    `
    justify-content: center;
    align-items: center;
    text-align: center;
  `}

  .empty-state {
    max-width: 500px;

    h3 {
      font-size: 24px;
      color: #333;
    }

    p {
      color: #666;
    }

    ul {
      text-align: left;
      padding: 0 0 0 20px;

      li {
        color: #555;
      }
    }
  }
`

interface ChatMessageStyledProps {
  isUser: boolean
}

export const ChatMessageStyled = styled.div<ChatMessageStyledProps>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};

  .message-content {
    max-width: 70%;
    padding: 12px 15px;
    border-radius: 8px;
    background-color: ${(props) => (props.isUser ? '#007bff' : '#f1f1f1')};
    color: ${(props) => (props.isUser ? '#fff' : '#333')};
  }
`

// export const NonAuthNoticeStyled = styled.div`
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   padding: 15px;

//   p {
//     font-size: 14px;
//   }

//   a {
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `

export const ChatInputContainerStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e1e4e8;
  padding: 10px;
`

export const ErrorMessageStyled = styled.div`
  color: #d32f2f;
  background-color: #fdecea;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .close-button {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: #9e3536;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #6d2526;
    }
  }
`

export const MainPageChatMessagesStyled = styled.div`
  display: contents;
`
