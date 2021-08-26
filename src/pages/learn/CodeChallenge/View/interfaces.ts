import { CodeChallengePageFragment } from 'src/modules/gql/generated'
import { CodeChallengeContext } from '../Context'
import { DesktopLayoutProps } from './DesktopLayout/interfaces'

export interface CodeChallengeViewProps {
  codeChallenge: CodeChallengePageFragment
  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']
  tabIndex: DesktopLayoutProps['tabIndex']
  topicId: DesktopLayoutProps['topicId']
}
