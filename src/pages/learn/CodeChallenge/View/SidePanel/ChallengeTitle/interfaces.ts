import { CodeChallengeContext } from '../../../Context'
import { SidePanelProps } from '../interfaces'
import { ToolPanelProps } from '../ToolPanel/interfaces'

export interface ChallengeTitleProps {
  // isCompleted: boolean
  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']

  executeChallenge: ToolPanelProps['executeChallenge']
  currentUser: SidePanelProps['currentUser']
}
