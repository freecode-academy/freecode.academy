import { UserFragment } from 'src/modules/gql/generated'

export type UserViewProps = {
  user: UserFragment & { password?: string }
}
