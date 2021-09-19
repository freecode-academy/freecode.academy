import { PrismaCmsContext } from '@prisma-cms/context'
import { UserProfileFragment } from 'src/modules/gql/generated'
// import { UserViewProps } from '../interfaces'

export type UserViewTechnologiesProps = {
  userTechnologies: UserProfileFragment['UserTechnologies']
  // user: UserViewProps["user"]

  currentUser: PrismaCmsContext['user']

  canEdit: boolean
}
