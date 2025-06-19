import { PrismaCmsComponentError } from '@prisma-cms/component'
import { UserTechnology } from 'src/gql/generated'

export type UserTechnologyStatusViewProps = {
  inEditMode?: boolean
  value: UserTechnology['status']
  error?: PrismaCmsComponentError | undefined
}
