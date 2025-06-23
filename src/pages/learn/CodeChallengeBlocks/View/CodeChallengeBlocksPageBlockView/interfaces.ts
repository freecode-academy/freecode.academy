import { CodeChallengeBlocksBlockFragment } from 'src/gql/generated'

export interface CodeChallengeBlocksPageBlockViewProps
  extends React.PropsWithChildren {
  object: CodeChallengeBlocksBlockFragment
  opened?: boolean
}
