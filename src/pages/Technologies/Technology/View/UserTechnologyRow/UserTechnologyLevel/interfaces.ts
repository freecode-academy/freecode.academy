import { PrismaCmsComponentError } from '@prisma-cms/component'
import { UserTechnology } from 'src/gql/generated'

export type UserTechnologyLevelProps = {
  inEditMode?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number | null
  ) => void
  value?: UserTechnology['level'] | undefined
  error?: PrismaCmsComponentError | undefined
  name: string
}
