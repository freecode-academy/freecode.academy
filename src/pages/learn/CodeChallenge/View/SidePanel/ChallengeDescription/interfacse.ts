import { ExecuteChallengeButtonProps } from '../ExecuteChallengeButton/interfaces'
import { SidePanelProps } from '../interfaces'

export interface ChallengeDescriptionProps {
  description?: string
  instructions?: string
  section?: string

  codeChallengeCompletion: ExecuteChallengeButtonProps['codeChallengeCompletion']
  user: SidePanelProps['user']
}
