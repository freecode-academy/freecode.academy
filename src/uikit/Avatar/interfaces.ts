import { UserNoNestingFragment } from 'src/gql/generated'

export interface UserAvatarProps {
  classes?: Record<string, any>

  size?: 'normal' | 'small' | 'big'

  editable?: boolean

  user: Partial<UserNoNestingFragment> & {
    __typename?: 'User'
  }

  className?: string
}
