import { createGlobalStyle } from 'styled-components'
import {
  LayoutContentStyled,
  LayoutStyled,
  LayoutWrapperStyled,
} from '../_App/layouts/MainLayout/styles'

export const MainPageGlobalStyled = createGlobalStyle`

  #__next  {
    display: contents;
  }
  
  ${LayoutWrapperStyled} {
    display: contents;
  }

  ${LayoutStyled} {
    ${LayoutContentStyled} {
      display: contents;
      &:after {
        content:none;
      } 
    }
  }
`
