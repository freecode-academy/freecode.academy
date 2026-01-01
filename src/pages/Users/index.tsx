import React, { useMemo } from 'react'
import {
  SortOrder,
  UsersConnectionDocument,
  UsersConnectionQueryVariables,
  useUsersConnectionQuery,
} from 'src/gql/generated'

import { UsersView } from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { PaginationProps } from 'src/components/Pagination'
import { NextSeo } from 'next-seo'

const first = 10

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
      rating: SortOrder.DESC,
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
        title="Tech Experts Directory — Find Developers & Mentors"
        description="Browse verified tech professionals. Filter by skills, experience level, and availability. Connect with the right expert for your project."
        canonical="/users"
      />

      <UsersView users={response.data?.users || []} pagination={pagination} />
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
