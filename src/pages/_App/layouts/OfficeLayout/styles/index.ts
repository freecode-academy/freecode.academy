import styled from 'styled-components'
import { OfficeLayoutNavBarStyled } from '../NavBar/styles'
import { OfficeLayoutContentStyled } from '../Content/styles'

import bg from './img/bg.jpg'

export const OfficeLayoutStyled = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.officeTheme.color.default};
  background: url('${bg}') scroll center top no-repeat;

  display: flex;

  ${OfficeLayoutNavBarStyled} {
    width: 250px;
    border-right: 1px solid #aaa;
    height: 100%;
    overflow: auto;
  }

  ${OfficeLayoutContentStyled} {
    flex: 1;
  }
`
