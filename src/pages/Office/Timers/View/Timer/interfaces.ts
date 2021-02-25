import { Timer_Fragment } from 'src/modules/gql/generated'
import { OfficeProjectPageViewTaskProps } from 'src/pages/Office/Projects/Project/View/Task/interfaces'

export type OfficeTimersTimerProps = {
  timer: Timer_Fragment

  filterByProject?: OfficeProjectPageViewTaskProps['filterByProject']
}
