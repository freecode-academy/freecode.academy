import { PrismaCmsContext } from '@prisma-cms/context'

import {
  OfficeProjectFragment,
  OfficeTaskFragment,
} from 'src/modules/gql/generated'

export type OfficeContextValue = {
  /**
   * Текущий пользователь
   */
  user: PrismaCmsContext['user']

  /**
   * Все проекты
   */
  projects: OfficeProjectFragment[]

  tasks: OfficeTaskFragment[]
}
