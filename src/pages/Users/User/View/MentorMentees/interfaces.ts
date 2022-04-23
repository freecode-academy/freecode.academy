import { UserPageViewProps } from '../interfaces'

import { PrismaCmsContext } from '@prisma-cms/context'

export type MentorMenteesProps = {
  user: UserPageViewProps['user']
  currentUser: PrismaCmsContext['user']
}
