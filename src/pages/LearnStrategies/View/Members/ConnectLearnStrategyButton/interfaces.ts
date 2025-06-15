import { PrismaCmsContext } from '@prisma-cms/context'
import { LearnStrategyFragment } from 'src/gql/generated'

export type ConnectLearnStrategyButtonProps = {
  currentUser: PrismaCmsContext['user']
  learnStrategy: LearnStrategyFragment

  /**
   * Флаг того, что стратегия может быть подключена
   */
  canConnect: boolean
}
