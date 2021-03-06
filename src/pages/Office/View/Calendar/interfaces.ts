import { CalendarOptions } from '@fullcalendar/react'
import { CalendarEventProps } from './Event/interfaces'

export type CalendarProps = Partial<CalendarOptions> & {
  tasks: CalendarEventProps['task'][]

  /**
   * Период отображения
   */
  range: 'day' | 'week' | 'month'
}
