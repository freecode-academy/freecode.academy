import { UserProfileFragment } from 'src/modules/gql/generated'

export type UserViewProps = {
  user: UserProfileFragment & { password?: string }
}
