import styled from 'styled-components'
import { TimerButtonStyled } from '../TimerButton/styles'

export const OfficeLayoutHeaderStyled = styled.header`
  /* background-color: green; */
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  /* overflow: hidden; */
  max-width: 100%;

  .header--title {
    font-size: 1.2rem;
    flex: 1;
    /* border: 1px solid red; */
  }

  .header--timer {
    /* 
    TODO text ellipsis
    overflow: hidden;
    text-overflow: ellipsis; */
    /* display: block; */
    margin-right: 1rem;
    display: flex;
    align-items: center;

    position: relative;

    .header--activeTimer {
      .task {
        border-radius: 0.8rem;
        line-height: 1.6rem;
        padding: 2px 30px 2px 10px;
        border: 2px solid ${({ theme }) => theme.officeTheme.color.timer.active};
      }
    }

    ${TimerButtonStyled} {
      position: absolute;
      right: -1rem;
      top: -0.3rem;
    }
  }
`
