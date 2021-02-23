import styled, { css } from 'styled-components'
import { TimerButtonStyledProps } from './interfaces'

export const TimerButtonStyled = styled.button<TimerButtonStyledProps>`
  border-radius: 50%;
  line-height: 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
  margin: 0;
  padding: 0;
  border: 0;
  text-align: center;
  cursor: pointer;

  ${({ status }) => {
    if (status === 'play') {
      return css`
        background: ${({ theme }) => theme.officeTheme.color.timer.active};
      `
    }
  }}
`
