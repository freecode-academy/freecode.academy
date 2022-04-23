import { UserUpdateInput } from 'src/modules/gql/generated'
import { UserPageViewProps } from '../interfaces'

export type UserAboutProps = {
  userEdited: UserPageViewProps['user']
  setData: React.Dispatch<React.SetStateAction<UserUpdateInput | null>>
  inEditMode: boolean
}
