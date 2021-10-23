import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import {
  CodeChallengeDocument,
  CodeChallengeQuery,
  CodeChallengeQueryVariables,
  useCodeChallengeQuery,
} from 'src/modules/gql/generated'
import { Page } from 'src/pages/_App/interfaces'
import { CodeChallengeEditView } from './View'

const getVariables = (
  query: ParsedUrlQuery
): CodeChallengeQueryVariables | undefined => {
  const id = query.id && typeof query.id === 'string' ? query.id : null

  if (id) {
    const variables: CodeChallengeQueryVariables = {
      where: {
        id,
      },
    }

    return variables
  }
}

export const CodeChallengeEditPage: Page = () => {
  const router = useRouter()

  const variables = getVariables(router.query)

  const response = useCodeChallengeQuery({
    skip: !variables,
    variables,
  })

  return (
    <>
      <NextSeo
        title={response.data?.codeChallenge?.localeTitle || 'Редактирование'}
        noindex
        nofollow
      />

      {response.data?.codeChallenge ? (
        <CodeChallengeEditView codeChallange={response.data?.codeChallenge} />
      ) : null}
    </>
  )
}

CodeChallengeEditPage.getInitialProps = async ({ query, apolloClient }) => {
  const variables = getVariables(query)

  const response = variables
    ? await apolloClient.query<CodeChallengeQuery, CodeChallengeQueryVariables>(
        {
          query: CodeChallengeDocument,
          variables,
        }
      )
    : null

  return {
    statusCode: !response?.data.codeChallenge ? 404 : undefined,
    layout: {
      variant: 'fullwidth',
    },
  }
}
