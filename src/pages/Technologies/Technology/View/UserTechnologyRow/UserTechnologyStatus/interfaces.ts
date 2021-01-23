import { PrismaCmsComponentError } from '@prisma-cms/component'
import {
  UserTechnology,
  UserTechnologyUpdateInput,
} from 'src/modules/gql/generated'

export type UserTechnologyStatusViewProps = {
  inEditMode: boolean
  setValue?: (
    name: 'status',
    value: UserTechnologyUpdateInput['status']
  ) => void
  value: UserTechnology['status']
  error: PrismaCmsComponentError | undefined
}
