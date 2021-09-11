import { PrismaCmsContext } from '@prisma-cms/context'
import {
  TechnologyNoNestingFragment,
  TechnologyUserTechnologyFragment,
} from 'src/modules/gql/generated'

export type UserTechnologyRowProps = {
  userTechnology: TechnologyUserTechnologyFragment

  currentUser: PrismaCmsContext['user']

  showActions: boolean

  /**
   * Выводить ли технологию
   */
  showTechnology: boolean
  technology?: TechnologyNoNestingFragment | null

  /**
   * Показывать ли колонку владельца.
   * На странице пользователя эта колонка не выводится.
   */
  showCreateBy: boolean
}
