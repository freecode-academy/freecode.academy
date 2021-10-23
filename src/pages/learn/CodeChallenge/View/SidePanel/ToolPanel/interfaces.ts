/* eslint-disable @typescript-eslint/ban-types */
import useExecuteChallenge from '../../../hooks/useExecuteChallenge'
import { SidePanelProps } from '../interfaces'

export interface ToolPanelProps {
  // isMobile?: boolean,
  // openResetModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  openHelpModal: Function
  openVideoModal: Function
  videoUrl: string | null | undefined
  guideUrl: string | null | undefined
  executeChallenge: ReturnType<typeof useExecuteChallenge>
  currentUser: SidePanelProps['currentUser']
}
