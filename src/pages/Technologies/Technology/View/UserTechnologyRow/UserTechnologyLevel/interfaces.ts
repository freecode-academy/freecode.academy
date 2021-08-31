import { PrismaCmsComponentError } from '@prisma-cms/component'
import { Scalars, UserTechnology } from 'src/modules/gql/generated'

export type UserTechnologyLevelProps = {
  inEditMode: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: Scalars['UserTechnologyLevel'] | null
  ) => void
  value: UserTechnology['level'] | undefined
  error: PrismaCmsComponentError | undefined
  name: string
}
