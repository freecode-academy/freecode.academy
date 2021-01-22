import { PrismaCmsComponentError } from 'packages/@prisma-cms/component/dist'
import { UserTechnology } from 'src/modules/gql/generated'

export type UserTechnologyLevelProps = {
  inEditMode: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: UserTechnology['level']
  error: PrismaCmsComponentError | undefined
}
