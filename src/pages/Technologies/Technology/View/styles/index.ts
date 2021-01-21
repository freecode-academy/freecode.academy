import {
  GridTableItemStyled,
  GridTableStyled,
} from 'src/components/GridTable/styles'
import styled from 'styled-components'

export const TechnologyViewStyled = styled.section`
  .technology--used-by {
    margin-top: 30px;
  }
`

export const TechnologyGridTableStyled = styled(GridTableStyled)`
  @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    > ${GridTableItemStyled} {
      display: grid;
      /* grid-template-columns: 54px minmax(100px, 2fr) minmax(130px, 1fr) 100px; */
      grid-template-columns: minmax(54px, min-content) minmax(130px, 1fr) minmax(
          130px,
          1fr
        ) minmax(130px, 1fr);
    }
  }
`
