import { TimerButtonStyled } from 'src/pages/_App/layouts/OfficeLayout/Content/Header/TimerButton/styles'
import styled from 'styled-components'

export const CalendarEventStyled = styled.div`
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
  cursor: default;

  .avatar-inline {
    /* display: inline-block; */
    float: left;
  }

  ${TimerButtonStyled} {
    height: 24px;
    width: 24px;
    line-height: 24px;
    font-size: 10px;
  }
`
