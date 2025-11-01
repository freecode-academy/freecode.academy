import styled, { css } from 'styled-components'

export const TextFieldStyled = styled.div`
  position: relative;
  width: 100%;
`

type TextFieldInputStyledProps = {
  $error?: boolean
}

export const TextFieldInputStyled = styled.input<TextFieldInputStyledProps>`
  width: 100%;
  padding: 10px 16px;
  font-size: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #2196f3;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #888;
    cursor: not-allowed;
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: #f44336;
      &:focus {
        box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.2);
      }
    `}
`
