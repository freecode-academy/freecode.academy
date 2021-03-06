import {
  CodeChallengeWithBlocksFragment,
  CodeChallengeFragment,
} from 'src/modules/gql/generated'
import { CodeChallengeContext } from '../Context'
import { DesktopLayoutProps } from './DesktopLayout/interfaces'

export interface CodeChallengeViewProps {
  object: CodeChallengeFragment & CodeChallengeWithBlocksFragment
  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']
  tabIndex: DesktopLayoutProps['tabIndex']
  topicId: DesktopLayoutProps['topicId']
}
