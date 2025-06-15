import { OfficeProjectFragment } from 'src/gql/generated'

export type OfficeProjectPageViewTaskProjectProps = {
  project: OfficeProjectFragment

  /**
   * Фильтр по проекту
   */
  filterByProject?: (project: OfficeProjectFragment) => void
}
