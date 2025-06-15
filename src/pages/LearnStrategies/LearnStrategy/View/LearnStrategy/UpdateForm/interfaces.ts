import { LearnStrategyNoNestingFragment } from 'src/gql/generated'

export type LearnStrategyUpdateFormProps = {
  learnStrategy: LearnStrategyNoNestingFragment
  inEditModeSetter: React.Dispatch<React.SetStateAction<boolean>>
}
