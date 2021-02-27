import {
  MeUserTimerFragment,
  Scalars,
  Task_Fragment,
} from 'src/modules/gql/generated'
import { OfficeProjectPageViewTaskProjectProps } from './Project/interfaces'

export type OfficeProjectPageViewTaskProps = {
  task: Task_Fragment & {
    children?: OfficeProjectPageViewTaskProps['task'][]
  }

  project?: {
    id: Scalars['ID']
  }

  projects: OfficeProjectPageViewTaskProjectProps['project'][]

  filterByProject?: OfficeProjectPageViewTaskProjectProps['filterByProject']

  // TODO Сейчас это используется, чтобы данные таймера со страницы таймеров пробросить.
  // Надо переделать, чтобы компонент таймера расширял компонент задачи
  /**
   * Допольнительная информация
   */
  info?: JSX.Element

  activeTimer: MeUserTimerFragment | null | undefined
}
