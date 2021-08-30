import { PrismaCmsComponentError } from '@prisma-cms/component'
import {
  UserTechnology,
  UserTechnologyUpdateInput,
} from 'src/modules/gql/generated'

export type UserTechnologyHiringStatusViewProps = {
  inEditMode: boolean
  setValue?: (
    name: 'hiring_status',
    value: UserTechnologyUpdateInput['hiring_status']
  ) => void
  value: UserTechnology['hiring_status']
  error: PrismaCmsComponentError | undefined
}
