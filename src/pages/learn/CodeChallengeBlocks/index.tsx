import React, { useMemo } from 'react'
import {
  CodeChallengeBlocksDocument,
  CodeChallengeBlocksQuery,
  useCodeChallengeBlocksQuery,
  CodeChallengeBlocksBlockFragment,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../../_App/interfaces'
import { NextSeo } from 'next-seo'

const CodeChallengeBlocksPage: Page = () => {
  const response = useCodeChallengeBlocksQuery({
    onError: console.error,
  })

  const objects = useMemo(() => {
    const objects: CodeChallengeBlocksBlockFragment[] = []

    return (
      response?.data?.codeChallengeBlocks.reduce((curr, next) => {
        if (next) {
          curr.push(next)
        }

        return curr
      }, objects) ?? []
    )
  }, [response?.data?.codeChallengeBlocks])

  return (
    <>
      <NextSeo
        title="Тестовые задания по HTML, CSS, Javascript онлайн"
        description="Бесплатные тестовые практически задания по HTML, CSS, Javascript онлайн"
      />

      <View
        objects={objects}
        count={objects.length}
        loading={response.loading}
      />
    </>
  )
}

CodeChallengeBlocksPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  const result = await apolloClient.query<CodeChallengeBlocksQuery>({
    query: CodeChallengeBlocksDocument,
  })

  return {
    statusCode: !result.data.codeChallengeBlocks.length ? 404 : undefined,
  }
}

export default CodeChallengeBlocksPage
