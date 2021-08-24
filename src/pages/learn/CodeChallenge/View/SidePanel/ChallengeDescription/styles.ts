import styled, { css } from 'styled-components'

type ChallengeDescriptionStyledProps = {
  /**
   * Размытый текст (пока не начали выполнение)
   */
  blur: boolean
}

export const ChallengeDescriptionStyled = styled.div<ChallengeDescriptionStyledProps>`
  &.challenge-instructions {
    blockquote {
      background-color: #f5f2f0;
      color: #555;
      padding: 10px;
      width: 100%;
      margin: 0;
      margin-bottom: 1.45rem;
      font-size: 0.9rem;
    }
  }

  #description p,
  #instructions p,
  #description ul,
  #instructions ul,
  #description ol,
  #instructions ol {
    font-family: 'Lato', sans-serif;
  }

  #instructions {
    font-size: 1rem;
  }

  ${({ blur }) => {
    if (blur) {
      return css`
        filter: blur(2px);
      `
    }
  }}
`
