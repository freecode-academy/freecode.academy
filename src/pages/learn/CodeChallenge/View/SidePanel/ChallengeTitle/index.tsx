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
  user,
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
        {user && !codeChallengeCompletion ? (
          <ExecuteChallengeButton
            executeChallenge={executeChallenge}
            codeChallengeCompletion={codeChallengeCompletion}
            user={user}
          />
        ) : null}
      </>
    )
  }, [children, codeChallengeCompletion, executeChallenge, user])
}

export default ChallengeTitle
