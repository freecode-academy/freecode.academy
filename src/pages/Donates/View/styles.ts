import styled from 'styled-components'

export const DonatesPageViewStyled = styled.div`
  display: inline-grid;
  /* grid-gap: 10px; */
  grid-template-columns: repeat(3, minmax(100px, auto));
  align-items: end;

  > * {
    border-bottom: 1px solid #ccc;
    padding: 2px 5px;
    margin: 10px 0;
  }
`
