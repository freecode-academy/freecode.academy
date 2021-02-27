import styled from 'styled-components'
import { OfficeListItemStyled } from 'src/pages/Office/components/ui/list/Item/styles'

export const OfficeTaskListItemStyled = styled(OfficeListItemStyled)`
  > .task {
    padding: 0 10px;
    flex: 1;

    > * {
      margin: 2px auto;

      &.subinfo {
        font-size: 0.7rem;
      }
    }
  }
`

export const OfficeProjectPageViewTaskStyled = styled.div`
  & > & {
    margin-left: 3rem;
  }
`
