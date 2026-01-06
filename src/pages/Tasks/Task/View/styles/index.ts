import styled from 'styled-components'

export const TaskViewStyled = styled.section`
  .task--used-by {
    margin-top: 30px;
  }
  border-collapse: collapse;
  td {
    border: 1px solid grey;
    padding: 10px;
  }
`

export const TaskViewDetails = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`
