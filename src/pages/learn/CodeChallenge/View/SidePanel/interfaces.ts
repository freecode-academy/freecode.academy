import { Maybe, MeUserFragment } from 'src/modules/gql/generated'
import { CodeChallengeContext } from '../../Context'
import { CodeChallengeViewProps } from '../interfaces'
import { ToolPanelProps } from './ToolPanel/interfaces'

export interface SidePanelProps {
  className?: string
  // description?: string | null | undefined
  object: CodeChallengeViewProps['object']

  showToolPanel: boolean

  executeChallenge: ToolPanelProps['executeChallenge']

  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']

  user: Maybe<MeUserFragment> | undefined
}
