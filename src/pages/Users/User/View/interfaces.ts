import { UserProfileFragment } from 'src/modules/gql/generated'

export type UserPageViewProps = {
  user: UserProfileFragment & { password?: string }
}
