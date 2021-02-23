import styled from 'styled-components'

export const OfficeProjectPageViewTasksSectionStyled = styled.section`
  > .header {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 10px;
    text-align: center;
  }
`

export const OfficeProjectPageViewStyled = styled.section`
  ${OfficeProjectPageViewTasksSectionStyled} {
    margin: 20px auto;
    max-width: 800px;
  }
`
