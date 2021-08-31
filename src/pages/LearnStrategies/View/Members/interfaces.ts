import { PrismaCmsContext } from '@prisma-cms/context'
import { LearnStrategyFragment } from 'src/modules/gql/generated'

export type LearnStrategiesViewMembersProps = {
  learnStrategy: LearnStrategyFragment
  currentUser: PrismaCmsContext['user']
}
