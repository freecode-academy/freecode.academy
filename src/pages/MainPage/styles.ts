import { createGlobalStyle } from 'styled-components'
import {
  LayoutContentStyled,
  LayoutStyled,
} from '../_App/layouts/MainLayout/styles'

export const MainPageGlobalStyled = createGlobalStyle`
  ${LayoutStyled} {
    ${LayoutContentStyled} {
      &:after {
        content:none;
      } 
    }
  }
`
