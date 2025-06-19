import {
  GridTableStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import styled from 'styled-components'

export const UsersViewTableStyled = styled(GridTableStyled)`
  display: grid;
  grid-template-columns: 1fr;
  /* border-top: 1px solid #ddd;
  border-left: 1px solid #ddd; */
  border-top: 1px solid gray;

  ${GridTableItemStyled} {
    display: contents;
    &:first-child {
      display: none;
    }

    > * {
      background-color: transparent;
      /* border-top: none;
      border-left: none; */
      /* border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd; */

      padding: 2px 5px;

      &:first-child {
        background-color: #eee;
      }
    }

    &:first-child {
      > * {
        font-weight: 500;
        padding: 5px 10px;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    grid-template-columns: min-content max-content max-content auto;

    > ${GridTableItemStyled} {
      &:first-child {
        display: contents;
      }

      > * {
        &:first-child {
          background-color: transparent;
        }
      }
    }
  }
`
