import { PrismaCmsContext } from '@prisma-cms/context'
import { Technology_UserTechnologyFragment } from 'src/modules/gql/generated'

export type UserTechnologyRowProps = {
  object: Technology_UserTechnologyFragment

  user: PrismaCmsContext['user']
}
