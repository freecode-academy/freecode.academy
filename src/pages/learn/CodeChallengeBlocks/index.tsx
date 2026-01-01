import React, { useMemo } from 'react'
import {
  CodeChallengeBlocksDocument,
  CodeChallengeBlocksQuery,
  useCodeChallengeBlocksQuery,
  CodeChallengeBlocksBlockFragment,
} from 'src/gql/generated'

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
        title="Interactive Coding Challenges — HTML, CSS, JavaScript"
        description="Practice web development with free interactive exercises. Master HTML, CSS, and JavaScript through hands-on coding challenges."
      />

      <View objects={objects} count={objects.length} />
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
