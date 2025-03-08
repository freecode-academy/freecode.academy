import styled, { css } from 'styled-components'

import { ChatMessageType } from './interfaces'

export const AiMessageInputStyled = styled.textarea`
  line-height: 1.5;
  min-height: 200px;
`

export const AiMessageContentStyled = styled.div`
  white-space: pre-wrap;

  ${AiMessageInputStyled} {
    width: 100%;
    resize: vertical;
    border: none;
    background-color: transparent;
    font-size: 1.2em;
  }
`

type AiMessageFormStyledProps = {
  type: ChatMessageType
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
