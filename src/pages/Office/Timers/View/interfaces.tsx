import { OfficeTimersTimerProps } from './Timer/interfaces'

import { Moment } from 'moment'
import { OfficeContextValue } from 'src/pages/_App/layouts/OfficeLayout/Context'

export type OfficeTimersViewProps = {
  timers: OfficeTimersTimerProps['timer'][]

  date: Moment
  setDate: (date: Moment) => void

  currentUserOnly: boolean
  setCurrentUserOnly: (only: boolean) => void

  user: OfficeContextValue['user']
}
