import React, { useMemo } from 'react'
import {
  UsersConnectionDocument,
  UsersConnectionQueryVariables,
  useUsersConnectionQuery,
} from 'src/modules/gql/generated'

import View from '../View'

import { Page } from '../../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'

const first = 10

const defaultVariables: UsersConnectionQueryVariables = {
  where: {
    CodeChallengeCompletions: {
      some: {},
    },
  },
  first,
}

function getQueryParams(query: ParsedUrlQuery) {
  let skip: number | undefined

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * first
  }

  return {
    skip,
    first,
    page,
  }
}

const StudentsPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return {
      ...defaultVariables,
      ...getQueryParams(query),
    }
  }, [query])

  const response = useUsersConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const { variables, loading } = response

  return (
    <>
      <NextSeo
        title="Ученики"
        description="Все пользователи, выполняющие учебные задания"
      />

      <View
        // {...queryResult}
        // data={response}
        objects={response.data?.users || []}
        count={response.data?.usersCount || 0}
        variables={variables}
        page={page}
        loading={loading}
      />
    </>
  )
}

StudentsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: UsersConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...defaultVariables,
      ...getQueryParams(context.query),
    },
  })

  return {}
}

export default StudentsPage
