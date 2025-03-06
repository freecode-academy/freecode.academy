import styled, { css } from 'styled-components'

import { ChatMessage } from './interfaces'

export const AiMessageInputStyled = styled.input`
  line-height: 1.5;
`

export const AiMessageContentStyled = styled.div`
  ${AiMessageInputStyled} {
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 1.2em;
  }
`

type AiMessageFormStyledProps = {
  type: ChatMessage['type']
}

export const AiMessageFormStyled = styled.form<AiMessageFormStyledProps>`
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  align-items: baseline;
  gap: 10px;

  ${AiMessageContentStyled} {
    flex: 1;
  }

  ${({ type }) => {
    if (type === 'user') {
      return css`
        margin-left: 10%;
        text-align: right;
        border-color: lightblue;
      `
    } else {
      return css`
        margin-right: 10%;
        border-color: lightgreen;
      `
    }
  }}
`
