import styled from 'styled-components'

export const SideBarProjectStyled = styled.div`
  /* > * {
    margin: 10px 0;
  } */

  a {
    &.project {
      display: block;
      padding: 10px;

      &.active,
      &:hover {
        background: rgba(30, 30, 30, 1);
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    padding-left: 10px;

    > *:first-child {
      flex: 1;
    }
  }
`
