import { UserViewProps } from '../interfaces'

import { PrismaCmsContext } from '@prisma-cms/context'

export type MentorMenteesProps = {
  user: UserViewProps['user']
  currentUser: PrismaCmsContext['user']
}
