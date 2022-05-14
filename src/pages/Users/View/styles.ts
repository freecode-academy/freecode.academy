import {
  GridTableStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import styled from 'styled-components'

export const UsersViewTableStyled = styled(GridTableStyled)`
  @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    > ${GridTableItemStyled} {
      display: grid;
      grid-template-columns:
        minmax(130px, 1fr) 130px minmax(130px, 1fr) minmax(130px, 1fr)
        150px;
    }
  }
`
