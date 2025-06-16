import styled, { css } from 'styled-components'

type AiChatTextareaStyledProps = {
  variant?: 'chat' | 'search'
}

export const AiChatInputStyled = styled.input<AiChatTextareaStyledProps>`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  font-family: inherit;
  font-size: 14px;

  ${({ variant }) =>
    variant === 'search'
      ? css`
          min-height: auto;
          height: 40px;
          resize: none;
        `
      : css`
          min-height: 150px;
          height: 30%;
          resize: vertical;
        `}
`

type AiChatSubmitStyledProps = {
  disabled?: boolean
  variant?: 'chat' | 'search'
}

export const AiChatSubmitStyled = styled.button<AiChatSubmitStyledProps>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #4285f4;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  transition: all 0.2s ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  position: relative;
  overflow: hidden;
  font-size: 0;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#4285f4' : '#3367d6')};
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.05)')};
  }

  &:active {
    transform: ${(props) => (props.disabled ? 'none' : 'scale(0.95)')};
  }

  /* Анимация загрузки */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    display: ${(props) => (props.disabled ? 'block' : 'none')};
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    display: block;
  }
`

// export const ChatMessageFormStyled = styled.form<{
//   variant?: 'chat' | 'search'
// }>`
//   display: flex;
//   align-items: center;
//   ${({ variant }) =>
//     variant === 'search'
//       ? css`
//           margin-bottom: 20px;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           border-radius: 22px;
//           background: white;
//         `
//       : ''}

//   ${AiChatTextareaStyled} {
//     flex: 1;
//     border: ${({ variant }) =>
//       variant === 'search' ? '1px solid #ddd' : 'none'};
//     background: transparent;
//   }

//   ${AiChatSubmitStyled} {
//     ${({ variant }) =>
//       variant === 'search'
//         ? css`
//             width: 38px;
//             height: 38px;
//             margin: 4px;
//           `
//         : ''}
//   }
// `

type ChatMessageFormStyledProps = {
  variant?: 'chat' | 'search'
}

export const ChatMessageFormStyled = styled.form<ChatMessageFormStyledProps>`
  display: flex;
  align-items: center;
  ${({ variant }) =>
    variant === 'search'
      ? css`
          /* margin-bottom: 20px; */
          /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
          /* border-radius: 22px; */
          /* background: white; */
          /* padding: 5px; */
        `
      : ''}

  ${AiChatInputStyled} {
    flex: 1;
    border: ${({ variant }) =>
      variant === 'search' ? '1px solid #ddd' : 'none'};
    background: transparent;
  }

  ${AiChatSubmitStyled} {
    ${({ variant }) =>
      variant === 'search'
        ? css`
            width: 38px;
            height: 38px;
            margin: 4px;
          `
        : ''}
  }
`
