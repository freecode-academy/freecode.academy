import {
  GridTableStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import styled from 'styled-components'

export const TasksViewStyled = styled.section``

export const TasksGridTableStyled = styled(GridTableStyled)`
  @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    > ${GridTableItemStyled} {
      display: grid;
      grid-template-columns: 54px 100px minmax(100px, 2fr) minmax(130px, 1fr) 120px 100px;
    }
  }
`
