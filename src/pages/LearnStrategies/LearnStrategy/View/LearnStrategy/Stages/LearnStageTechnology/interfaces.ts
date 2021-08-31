import {
  LearnStrategyStageNoNestingFragment,
  MeUserFragment,
  TechnologyNoNestingFragment,
  LearnStrategyFragment,
} from 'src/modules/gql/generated'

export type LearnStageTechnologyProps = {
  learnStrategyStage: LearnStrategyStageNoNestingFragment
  learnStrategy: LearnStrategyFragment
  technology: TechnologyNoNestingFragment
  currentUser: MeUserFragment | null | undefined
  // Режим редактирования
  inEditMode: boolean
}
