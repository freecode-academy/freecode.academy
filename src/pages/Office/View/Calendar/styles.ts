import styled from 'styled-components'

export const CalendarStyled = styled.div`
  background: ${({ theme }) => theme.officeTheme.bg.sidebar};

  /* 
    Всплывашки
   */
  .fc-popover {
    background: ${({ theme }) => theme.officeTheme.bg.sidebar};
  }
`
