import styled, { css } from 'styled-components'
import { ButtonSize, ButtonVariant } from './index'
import { darken, lighten, rgba } from 'polished'

type ButtonStyledProps = {
  $variant: ButtonVariant
  $size: ButtonSize
  $fullWidth: boolean
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  font-family: inherit;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 6px 12px;
          font-size: 0.75rem;
        `
      case 'large':
        return css`
          padding: 12px 24px;
          font-size: 1rem;
        `
      default: // medium
        return css`
          padding: 8px 16px;
          font-size: 0.875rem;
        `
    }
  }}
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.light};

          &:hover {
            background-color: ${darken(0.1, theme.colors.primary)};
          }

          &:active {
            background-color: ${darken(0.2, theme.colors.primary)};
          }

          &:disabled {
            background-color: ${lighten(0.25, theme.colors.primary)};
            color: ${theme.colors.text.light};
            cursor: not-allowed;
          }
        `

      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text.light};

          &:hover {
            background-color: ${darken(0.1, theme.colors.secondary)};
          }

          &:active {
            background-color: ${darken(0.2, theme.colors.secondary)};
          }

          &:disabled {
            background-color: ${lighten(0.25, theme.colors.secondary)};
            color: ${theme.colors.text.light};
            cursor: not-allowed;
          }
        `

      case 'success':
        return css`
          background-color: ${theme.colors.success};
          color: ${theme.colors.text.light};

          &:hover {
            background-color: ${darken(0.1, theme.colors.success)};
          }

          &:active {
            background-color: ${darken(0.2, theme.colors.success)};
          }

          &:disabled {
            background-color: ${lighten(0.25, theme.colors.success)};
            color: ${theme.colors.text.light};
            cursor: not-allowed;
          }
        `

      case 'error':
        return css`
          background-color: ${theme.colors.error};
          color: ${theme.colors.text.light};

          &:hover {
            background-color: ${darken(0.1, theme.colors.error)};
          }

          &:active {
            background-color: ${darken(0.2, theme.colors.error)};
          }

          &:disabled {
            background-color: ${lighten(0.25, theme.colors.error)};
            color: ${theme.colors.text.light};
            cursor: not-allowed;
          }
        `

      case 'warning':
        return css`
          background-color: ${theme.colors.warning};
          color: ${theme.colors.text.light};

          &:hover {
            background-color: ${darken(0.1, theme.colors.warning)};
          }

          &:active {
            background-color: ${darken(0.2, theme.colors.warning)};
          }

          &:disabled {
            background-color: ${lighten(0.25, theme.colors.warning)};
            color: ${theme.colors.text.light};
            cursor: not-allowed;
          }
        `

      case 'info':
        return css`
          background-color: ${theme.colors.info};
          color: ${theme.colors.text.light};

          &:hover {
            background-color: ${darken(0.1, theme.colors.info)};
          }

          &:active {
            background-color: ${darken(0.2, theme.colors.info)};
          }

          &:disabled {
            background-color: ${lighten(0.25, theme.colors.info)};
            color: ${theme.colors.text.light};
            cursor: not-allowed;
          }
        `

      case 'outlined':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};

          &:hover {
            background-color: ${rgba(theme.colors.primary, 0.04)};
          }

          &:active {
            background-color: ${rgba(theme.colors.primary, 0.12)};
          }

          &:disabled {
            color: ${lighten(0.25, theme.colors.primary)};
            border-color: ${lighten(0.25, theme.colors.primary)};
            cursor: not-allowed;
          }
        `

      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          padding-left: 8px;
          padding-right: 8px;

          &:hover {
            background-color: ${rgba(theme.colors.primary, 0.04)};
          }

          &:active {
            background-color: ${rgba(theme.colors.primary, 0.12)};
          }

          &:disabled {
            color: ${lighten(0.25, theme.colors.primary)};
            cursor: not-allowed;
          }
        `
    }
  }}
  
  .button-start-icon {
    display: flex;
    margin-right: 4px;
  }

  .button-end-icon {
    display: flex;
    margin-left: 4px;
  }

  a& {
    &,
    &:focus,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`
