import {
  CodeChallengeWithBlocks_Fragment,
  CodeChallenge_Fragment,
} from 'src/modules/gql/generated'
import { CodeChallengeContext } from '../Context'
import { DesktopLayoutProps } from './DesktopLayout/interfaces'

export interface CodeChallengeViewProps {
  object: CodeChallenge_Fragment & CodeChallengeWithBlocks_Fragment
  codeChallengeCompletion: CodeChallengeContext['codeChallengeCompletion']
  tabIndex: DesktopLayoutProps['tabIndex']
  topicId: DesktopLayoutProps['topicId']
}
