import { UserFragment } from 'src/modules/gql/generated'

export type UserViewProps = {
  object: UserFragment & { password?: string }
}
