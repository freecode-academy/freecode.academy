import { Project_Fragment } from 'src/modules/gql/generated'
import { ProjectCalendarProps } from './Calendar/interfaces'

export type OfficeProjectPageViewProps = {
  project: Project_Fragment

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
