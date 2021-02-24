import {
  MeUserTimerFragment,
  OfficeProjectFragment,
  Task_Fragment,
} from 'src/modules/gql/generated'

export type OfficeProjectPageViewTaskProps = {
  task: Task_Fragment

  projects: OfficeProjectFragment[]

  // TODO Сейчас это используется, чтобы данные таймера со страницы таймеров пробросить.
  // Надо переделать, чтобы компонент таймера расширял компонент задачи
  /**
   * Допольнительная информация
   */
  info?: JSX.Element

  activeTimer: MeUserTimerFragment | null | undefined
}
