import { PrismaCmsContext } from '@prisma-cms/context'
import { UserViewProps } from '../interfaces'

export type UserChatRoomsProps = {
  user: UserViewProps['object']

  currentUser: PrismaCmsContext['user']
}
