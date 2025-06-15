import { PrismaCmsContext } from '@prisma-cms/context'
import { LearnStrategyFragment } from 'src/gql/generated'

export type LearnStrategiesViewMembersProps = {
  learnStrategy: LearnStrategyFragment
  currentUser: PrismaCmsContext['user']
}
