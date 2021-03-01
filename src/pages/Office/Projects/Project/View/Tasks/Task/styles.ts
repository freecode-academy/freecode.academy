import styled from 'styled-components'
import { OfficeListItemStyled } from 'src/pages/Office/components/ui/list/Item/styles'

export const OfficeTaskListItemStyled = styled(OfficeListItemStyled)`
  > * {
    margin-right: 5px;

    &.task {
      padding: 0 5px;
      flex: 1;

      > * {
        margin: 2px auto;

        &.task-info {
          display: flex;
          align-items: center;
        }

        &.subinfo {
          font-size: 0.7rem;

          .projects {
            padding: 0 10px;
          }
        }
      }
    }
  }
`

export const OfficeProjectPageViewTaskStyled = styled.div`
  & > & {
    margin-left: 3rem;
  }
`
