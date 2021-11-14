import { PrismaCmsContext } from '@prisma-cms/context'
import { CodeChallengeContext } from '../../Context'
import { CodeChallengeViewProps } from '../interfaces'
import { ToolPanelProps } from './ToolPanel/interfaces'

export interface SidePanelProps {
  className?: string
  // description?: string | null | undefined
  codeChallenge: CodeChallengeViewProps['codeChallenge']

  showToolPanel: boolean

  executeChallenge: ToolPanelProps['executeChallenge']

  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']

  currentUser: PrismaCmsContext['user']
}
