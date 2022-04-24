import React, { useMemo } from 'react'
import { CodeChallengeStatus } from 'src/hooks/useCodeChallengStatus'

import { CodeChallengeStatusIconProps } from './interfaces'
import { CodeChallengeStatusIconStyled } from './styles'

/**
 * Иконка статуса выполнения задания
 */
const CodeChallengeStatusIcon: React.FC<CodeChallengeStatusIconProps> = ({
  status,
}) => {
  return useMemo(() => {
    let icon: JSX.Element | undefined

    switch (status) {
      case CodeChallengeStatus.None:
        break
      case CodeChallengeStatus.Done:
        icon = <span className="icon OK">✓</span>
        break
      case CodeChallengeStatus.Progress:
        icon = <span className="icon PROGRESS">⌛</span>
        break
    }

    return <CodeChallengeStatusIconStyled>{icon}</CodeChallengeStatusIconStyled>
  }, [status])
}

export default CodeChallengeStatusIcon
