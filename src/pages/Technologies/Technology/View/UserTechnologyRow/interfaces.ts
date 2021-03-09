import { PrismaCmsContext } from '@prisma-cms/context'
import { TechnologyUserTechnologyFragment } from 'src/modules/gql/generated'

export type UserTechnologyRowProps = {
  object: TechnologyUserTechnologyFragment

  user: PrismaCmsContext['user']
}
