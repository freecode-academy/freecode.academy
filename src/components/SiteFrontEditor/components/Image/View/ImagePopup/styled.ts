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
          margin: 0 auto;
          display: block;
        `
    }
  }}
`

export const ImagePopupImageWrapperStyled = styled.div`
  overflow: auto;
`

export const ImagePopupStyled = styled.div``
