// import { CalendarOptions } from '@fullcalendar/react'
import { CalendarEventProps } from './Event/interfaces'

// export type CalendarProps = Partial<CalendarOptions> & {
export type CalendarProps = {
  tasks: CalendarEventProps['task'][]

  /**
   * Период отображения
   */
  range: 'day' | 'week' | 'month'
}
