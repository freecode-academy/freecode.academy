import { PrismaCmsContext } from '@prisma-cms/context'
import { UserPageViewProps } from '../interfaces'

export type UserChatRoomsProps = {
  user: UserPageViewProps['user']

  currentUser: PrismaCmsContext['user']
}
