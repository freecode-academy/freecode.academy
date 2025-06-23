import React, { useMemo } from 'react'
import { useCodeChallengStatus } from 'src/hooks/useCodeChallengStatus'
import CodeChallengeStatusIcon from '../../../components/StatusIcon'
import { ExecuteChallengeButton } from '../ExecuteChallengeButton'
import { ChallengeTitleProps } from './interfaces'
import { ChallengeTitleStyled } from './styles'

const ChallengeTitle: React.FC<ChallengeTitleProps> = ({
  children,
  // isCompleted,
  codeChallengeCompletion,
  executeChallenge,
  currentUser,
}) => {
  const { status } = useCodeChallengStatus({
    codeChallengeCompletion,
  })

  return useMemo(() => {
    return (
      <>
        <ChallengeTitleStyled className="challenge-title text-center">
          <CodeChallengeStatusIcon status={status} />{' '}
          {children || 'Happy Coding!'}
        </ChallengeTitleStyled>

        {/*
        Если пользователь авторизованный и он еще не начинал выполнения,
        то выводим кнопку
         */}
        {currentUser && !codeChallengeCompletion ? (
          <ExecuteChallengeButton
            executeChallenge={executeChallenge}
            codeChallengeCompletion={codeChallengeCompletion}
            currentUser={currentUser}
          />
        ) : null}
      </>
    )
  }, [status, children, currentUser, codeChallengeCompletion, executeChallenge])
}

export default ChallengeTitle
