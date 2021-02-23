import styled from 'styled-components'
import { OfficeLayoutHeaderStyled } from '../Header/styles'
import { OfficeLayoutSideBarStyled } from '../SideBar/styles'

export const OfficeLayoutContentStyled = styled.div`

  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;

  > ${OfficeLayoutHeaderStyled} {
    
  }

  > .wrapper {
    /* height: 100%; */
    display: flex;
    flex:1 ;
    overflow-x: hidden;
    overflow-y: auto;
    > * {

      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;

      &.content {

        /* background: green; */
        flex: 1;

      }

      &${OfficeLayoutSideBarStyled} {
        width: 250px;
        display: none;
        /* overflow: auto; */
      }

    }

    }

  }
  
  
`
