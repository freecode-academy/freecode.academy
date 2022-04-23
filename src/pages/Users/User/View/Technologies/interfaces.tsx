import { PrismaCmsContext } from '@prisma-cms/context'
import { UserProfileFragment } from 'src/modules/gql/generated'
// import { UserPageViewProps } from '../interfaces'

export type UserViewTechnologiesProps = {
  userTechnologies: NonNullable<UserProfileFragment['UserTechnologies']>
  // user: UserPageViewProps["user"]

  currentUser: PrismaCmsContext['user']

  canEdit: boolean
}
