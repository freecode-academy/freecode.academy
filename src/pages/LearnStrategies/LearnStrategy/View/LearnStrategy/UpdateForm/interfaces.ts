import { LearnStrategyNoNestingFragment } from 'src/modules/gql/generated'

export type LearnStrategyUpdateFormProps = {
  learnStrategy: LearnStrategyNoNestingFragment
  inEditModeSetter: React.Dispatch<React.SetStateAction<boolean>>
}
