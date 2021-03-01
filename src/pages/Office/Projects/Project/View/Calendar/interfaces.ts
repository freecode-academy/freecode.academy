import { CalendarProps } from 'src/pages/Office/View/Calendar/interfaces'
import { OfficeProjectPageViewProps } from '../interfaces'

export type ProjectCalendarProps = CalendarProps & {
  project: OfficeProjectPageViewProps['project']
}
