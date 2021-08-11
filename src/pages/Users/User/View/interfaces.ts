import { UserFragment } from 'src/modules/gql/generated'

export interface UserViewProps {
  object: UserFragment & { password?: string }
}
