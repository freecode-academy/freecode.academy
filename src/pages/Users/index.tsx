import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  SortOrder,
  UsersConnectionDocument,
  UsersConnectionQueryVariables,
  useUsersConnectionQuery,
} from 'src/modules/gql/generated'

import { UsersView } from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { PaginationProps } from 'src/components/Pagination'

const first = 10

// const defaultVariables: UsersConnectionQueryVariables = {
//   where: {},
//   first,
//   orderBy: {
//     updatedAt: SortOrder.DESC,
//   },
// }

function getVariables(
  query: ParsedUrlQuery
): UsersConnectionQueryVariables & { page: number } {
  let skip: number | undefined

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * first
  }

  const where: NonNullable<UsersConnectionQueryVariables['where']> = {}

  const search =
    query.search && typeof query.search === 'string' ? query.search : undefined

  if (search) {
    where.OR = [
      {
        username: {
          contains: search,
        },
      },
      {
        email: {
          contains: search,
        },
      },
      {
        fullname: {
          contains: search,
        },
      },
    ]
  }

  return {
    skip,
    first,
    page,
    where,
    orderBy: {
      updatedAt: SortOrder.DESC,
    },
  }
}

export const UsersPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return getVariables(query)
  }, [query])

  const response = useUsersConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const {
    variables,
    // loading
  } = response

  const pagination = useMemo<PaginationProps>(() => {
    return {
      total: response.data?.usersCount ?? 0,
      limit: variables?.first ?? first,
      page,
    }
  }, [page, response.data?.usersCount, variables?.first])

  return (
    <>
      <Head>
        <title>Пользователи</title>
        <meta name="description" content="Все пользователи" />
      </Head>

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

UsersPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: UsersConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: getVariables(context.query),
  })

  return {}
}
