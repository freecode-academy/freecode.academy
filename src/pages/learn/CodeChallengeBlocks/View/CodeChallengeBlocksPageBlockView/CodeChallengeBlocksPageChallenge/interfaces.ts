import { ChallengeFragment } from 'src/gql/generated'
import { CodeChallengeContext } from 'src/pages/learn/CodeChallenge/Context'

export interface CodeChallengeBlocksPageChallengeProps {
  object: ChallengeFragment

  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']
}
