import { OfficeTimersTimerProps } from './Timer/interfaces'

import { Moment } from 'moment'

export type OfficeTimersViewProps = {
  timers: OfficeTimersTimerProps['timer'][]

  date: Moment
  setDate: (date: Moment) => void
}
