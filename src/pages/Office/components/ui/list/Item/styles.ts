import styled from 'styled-components'

export const OfficeListItemStyled = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.officeTheme.bg.task.default};
  margin: 2px 0;
  padding: 10px;
`
