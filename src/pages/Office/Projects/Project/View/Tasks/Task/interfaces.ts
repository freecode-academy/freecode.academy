import {
  MeUserTimerFragment,
  Scalars,
  TaskFragment,
} from 'src/modules/gql/generated'
import { UikitUserLinkProps } from 'src/uikit/Link/User'
import { OfficeProjectPageViewTaskProjectProps } from './Project/interfaces'

export type OfficeProjectPageViewTaskProps = {
  task: TaskFragment & {
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

  // TODO сейчас это хак, потому что в этот компонент приходит по сути или Задача или Задача таймера,
  // в которой не все сущности имеются. Надо будет переделать компонент
  /**
   * Владелец объекта
   */
  CreatedBy: UikitUserLinkProps['user'] | null | undefined
}
