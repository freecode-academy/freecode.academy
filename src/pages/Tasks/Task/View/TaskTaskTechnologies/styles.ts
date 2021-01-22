import styled from 'styled-components'
import {
  GridTableItemStyled,
  GridTableStyled,
} from 'src/components/GridTable/styles'

export const TaskTaskTechnologiesGridTableStyled = styled(GridTableStyled)`
  @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    > ${GridTableItemStyled} {
      display: grid;
      /* grid-template-columns: 54px minmax(100px, 2fr) minmax(130px, 1fr) 100px; */
      grid-template-columns: minmax(54px, min-content) minmax(130px, 1fr) minmax(
          80px,
          1fr
        );
    }
  }
`
