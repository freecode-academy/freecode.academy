import { UserUpdateInput } from 'src/gql/generated'

export type ChatSettingProps = {
  name: keyof UserUpdateInput
  title: string
  checked: boolean
  setValue: (name: keyof UserUpdateInput, checked: boolean) => void
}
