import { UserUpdateInput } from 'src/modules/gql/generated'
import { UserViewProps } from '../interfaces'

export type UserAboutProps = {
  userEdited: UserViewProps['user']
  setData: React.Dispatch<React.SetStateAction<UserUpdateInput | null>>
  inEditMode: boolean
}
