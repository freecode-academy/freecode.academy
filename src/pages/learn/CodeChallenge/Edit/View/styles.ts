import styled from 'styled-components'
import { DesktopLayoutStyled } from '../../View/DesktopLayout/styles'

export const CodeChallengeEditViewToolbarStyled = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  > .title {
    flex: 1;

    > .fields {
      display: flex;
      align-items: center;
    }
  }
`

export const CodeChallengeEditViewContentStyled = styled.div`
  display: flex;

  > * {
    border-right: 1px solid #ddd;
    width: 33.3%;

    &:last-child {
      border: none;
    }
  }
`

/**
 * Расширяем DesktopLayoutStyled, чтобы получить общие стили раздела.
 */
export const CodeChallengeEditViewStyled = styled(DesktopLayoutStyled)``
