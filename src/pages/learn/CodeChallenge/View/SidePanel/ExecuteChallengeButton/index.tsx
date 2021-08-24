import React, { useMemo } from 'react'
import { ButtonStyled } from '../ToolPanel/styles'
import { ExecuteChallengeButtonProps } from './interfaces'

export const ExecuteChallengeButton: React.FC<ExecuteChallengeButtonProps> = ({
  executeChallenge,
  codeChallengeCompletion,
  user,
  ...other
}) => {
  return useMemo(() => {
    return (
      <ButtonStyled role="run-tests" onClick={executeChallenge} {...other}>
        {user && !codeChallengeCompletion
          ? 'Приступить к выполнению'
          : 'Запустить тесты'}{' '}
        (Ctrl+Enter)
      </ButtonStyled>
    )
  }, [codeChallengeCompletion, executeChallenge, other, user])
}
