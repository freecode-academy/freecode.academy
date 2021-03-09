import { ProjectFragment } from 'src/modules/gql/generated'
import { ProjectCalendarProps } from './Calendar/interfaces'

export type OfficeProjectPageViewProps = {
  project: ProjectFragment

  /**
   * Отображение
   */
  view: /**
   * Задачи списком
   */
  | 'taskslist'

    /**
     * Календарь
     */
    | {
        type: 'calendar'
        range: ProjectCalendarProps['range']
      }
}
