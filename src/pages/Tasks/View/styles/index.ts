import {
  GridTableStyled,
  GridTableAttributesContainerStyled,
  GridTableAttributeStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import styled from 'styled-components'

export const TasksViewStyled = styled(GridTableStyled)`
  @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    > ${GridTableItemStyled} {
      display: grid;
      /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
      /* grid-template-columns: 2em 2em 10fr 2fr 2fr 2fr 2fr 5em 5em; */
      /* grid-template-columns: auto repeat(auto-fit, minmax(100px, 1fr)); */
      /* grid-template-columns: min-content auto; */
      /* grid-template-columns: unset; */
      /* grid-auto-columns: min-content; */
      /* grid-auto-columns: minmax(10px, 300px); */
      /* grid-auto-columns: auto; */
      /* grid-auto-columns: 1fr; */
      /* grid-template-columns: max-content repeat(auto-fit, minmax(100px, 1fr)); */
      /* grid-template-columns: 200px repeat(auto-fill, 100px); */
      /* grid-template-columns: 54px 120px 160px 160px repeat(auto-fit, minmax(100px, 1fr)); */
      grid-template-columns: 54px 100px minmax(100px, 2fr) minmax(130px, 1fr) 120px 100px;
      /* grid-template-columns: min-content 200px auto 200px auto; */
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakpoints.sm - 1}px`}) {
    ${GridTableAttributeStyled} {
      /* &.content {
        display: none;
      } */
    }
  }

  ${GridTableAttributesContainerStyled} {
    /* Definition of wrapping column width for attribute groups. */
    /* &.part-information {
      --column-width-min: 10em;
    }

    &.part-id {
      --column-width-min: 10em;
    }

    &.vendor-information {
      --column-width-min: 8em;
    }

    &.quantity {
      --column-width-min: 5em;
    }

    &.cost {
      --column-width-min: 5em;
    }

    &.duty {
      --column-width-min: 5em;
    }

    &.freight {
      --column-width-min: 5em;
    } */
  }
`
