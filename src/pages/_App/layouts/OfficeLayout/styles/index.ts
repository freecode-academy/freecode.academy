import styled from 'styled-components'
import { OfficeLayoutNavBarStyled } from '../NavBar/styles'
import { OfficeLayoutContentStyled } from '../Content/styles'

import bg from './img/bg.jpg'

export const OfficeLayoutStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  background: url('${bg}') scroll center top no-repeat;

  display: flex;
  overflow: hidden;

  color: ${({ theme }) => theme.officeTheme.color.default};

  a {
    color: ${({ theme }) => theme.officeTheme.color.default};
    text-decoration: none;
  }

  ${OfficeLayoutNavBarStyled} {
    width: 250px;
    border-right: 1px solid #aaa;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  ${OfficeLayoutContentStyled} {
    flex: 1;
  }
`
