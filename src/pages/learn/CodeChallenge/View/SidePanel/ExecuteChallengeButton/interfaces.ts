import { MeUserCodeChallengeCompletionFragment } from 'src/modules/gql/generated'
import { SidePanelProps } from '../interfaces'
import { ToolPanelProps } from '../ToolPanel/interfaces'

export type ExecuteChallengeButtonProps = {
  executeChallenge: ToolPanelProps['executeChallenge']

  codeChallengeCompletion:
    | MeUserCodeChallengeCompletionFragment
    | null
    | undefined

  currentUser: SidePanelProps['currentUser']
}
