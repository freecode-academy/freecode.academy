import { PrismaCmsContext } from '@prisma-cms/context'
import { UserFragment } from 'src/modules/gql/generated'
// import { UserViewProps } from '../interfaces'

export type UserViewTechnologiesProps = {
  userTechnologies: UserFragment['UserTechnologies']
  // user: UserViewProps["user"]

  currentUser: PrismaCmsContext['user']

  canEdit: boolean
}
