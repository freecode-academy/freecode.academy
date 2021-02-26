import { OfficeProjectFragment } from 'src/modules/gql/generated'

export type OfficeProjectPageViewTaskProjectProps = {
  project: OfficeProjectFragment

  /**
   * Фильтр по проекту
   */
  filterByProject?: (project: OfficeProjectFragment) => void
}
