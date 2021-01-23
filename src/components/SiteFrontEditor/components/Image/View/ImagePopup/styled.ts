import styled, { css } from 'styled-components'

type ImagePopupImageStyledProps = {
  /**
   * main - основной вывод
   * popup - всплывашка
   */
  role: 'main' | 'popup'
}

export const ImagePopupImageStyled = styled.img<ImagePopupImageStyledProps>`
  ${({ role }) => {
    switch (role) {
      case 'main':
        return css`
          cursor: pointer;
          max-width: 600px;
          width: 100%;
        `

      case 'popup':
        return css`
          width: 100%;
          max-width: 100%;
        `
    }
  }}
`

export const ImagePopupStyled = styled.div``
