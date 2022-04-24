import Link from 'next/link'
import React from 'react'
import Button from 'src/components/ui/Button'
import { CodeChallengeStatus } from 'src/hooks/useCodeChallengStatus'
import {
  CodeChallengeFragment,
  SortOrder,
  useCodeChallengesQuery,
} from 'src/modules/gql/generated'

export type NextLessonProps = {
  challenge: CodeChallengeFragment
  status: CodeChallengeStatus.Done
}

export const NextLesson: React.FC<NextLessonProps> = ({ challenge }) => {
  const response = useCodeChallengesQuery({
    variables: {
      cursor: {
        id: challenge.id,
      },
      orderBy: {
        rank: SortOrder.ASC,
      },
      where: {
        Block: {
          equals: challenge.Block,
        },
      },
      skip: 1,
      take: 1,
    },
    skip: !challenge.Block,
  })

  const codeChallenge = response.data?.codeChallenges.at(0)

  if (!codeChallenge) {
    return null
  }

  const { name, localeTitle } = codeChallenge

  const title = localeTitle || name

  return (
    <Link href={`/learn/exercises/${codeChallenge.id}`}>
      <a title={`Перейти к выполнению задания "${title}"` || ''}>
        <Button variant="success" size="small">
          Следующее задание
        </Button>
      </a>
    </Link>
  )
}
