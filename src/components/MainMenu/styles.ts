import { AppBar } from 'material-ui'
import { minWidth } from 'src/theme/helpers'
import styled, { css } from 'styled-components'

export const MainMenuItemsDesktopStyled = styled.div`
  display: none;

  ${minWidth.lg(css`
    display: contents;
  `)}
`

export const MainMenuItemsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 0px 8px;
`

export const MainMenuStyled = styled(AppBar)``
