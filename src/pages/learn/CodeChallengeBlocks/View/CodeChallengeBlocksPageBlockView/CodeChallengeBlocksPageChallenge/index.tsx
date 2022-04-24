import React from 'react'
import Link from 'next/link'
import { CodeChallengeBlocksPageChallengeProps } from './interfaces'
import { CodeChallengeBlocksPageChallengeStyled } from './styles'
import CodeChallengeStatusIcon from 'src/pages/learn/CodeChallenge/components/StatusIcon'
import { useCodeChallengStatus } from 'src/hooks/useCodeChallengStatus'

const CodeChallengeBlocksPageChallenge: React.FC<
  CodeChallengeBlocksPageChallengeProps
> = ({ object, codeChallengeCompletion }) => {
  const { name, localeTitle } = object

  const title = localeTitle || name

  const { status } = useCodeChallengStatus({
    codeChallengeCompletion,
  })

  return (
    <CodeChallengeBlocksPageChallengeStyled>
      <CodeChallengeStatusIcon status={status} />{' '}
      <Link href={`/learn/exercises/${object.id}`}>
        <a title={`Перейти к выполнению задания "${title}"` || ''}>{title}</a>
      </Link>{' '}
    </CodeChallengeBlocksPageChallengeStyled>
  )
}

export default CodeChallengeBlocksPageChallenge
