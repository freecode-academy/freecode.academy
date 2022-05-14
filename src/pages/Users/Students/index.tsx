import React, { useMemo } from 'react'
import {
  UsersConnectionDocument,
  UsersConnectionQueryVariables,
  useUsersConnectionQuery,
} from 'src/modules/gql/generated'

import { UsersView } from '../View'

import { Page } from '../../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'
import { PaginationProps } from 'src/components/Pagination'

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

  const { variables } = response

  const pagination = useMemo<PaginationProps>(() => {
    return {
      total: response.data?.usersCount ?? 0,
      limit: variables?.first ?? first,
      page,
    }
  }, [page, response.data?.usersCount, variables?.first])

  return (
    <>
      <NextSeo
        title="Ученики"
        description="Все пользователи, выполняющие учебные задания"
      />

      <UsersView
        // {...queryResult}
        // data={response}
        users={response.data?.users || []}
        // count={response.data?.usersCount || 0}
        // variables={variables}
        // page={page}
        // loading={loading}
        pagination={pagination}
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
