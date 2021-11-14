import React, { useMemo } from 'react'
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
  return useMemo(() => {
    return (
      <>
        <ChallengeTitleStyled className="challenge-title text-center">
          <CodeChallengeStatusIcon
            codeChallengeCompletion={codeChallengeCompletion}
          />{' '}
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
  }, [children, codeChallengeCompletion, executeChallenge, currentUser])
}

export default ChallengeTitle
