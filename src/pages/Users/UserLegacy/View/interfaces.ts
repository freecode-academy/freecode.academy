import { UserProfileFragment } from 'src/gql/generated'

export type UserPageViewProps = {
  user: UserProfileFragment & { password?: string }
}
