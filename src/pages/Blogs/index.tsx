import Head from 'next/head'
import React, { useEffect, useMemo } from 'react'
import {
  BlogsConnectionDocument,
  BlogsConnectionQueryVariables,
  useBlogsConnectionQuery,
  ResourceType,
} from 'src/gql/generated'

import { BlogsView as View } from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useBoolean } from 'src/hooks/useBoolean'

const first = 10

const defaultVariables: BlogsConnectionQueryVariables = {
  where: {
    type: {
      in: [ResourceType.BLOG, ResourceType.PERSONALBLOG],
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

const BlogsPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return {
      ...defaultVariables,
      ...getQueryParams(query),
    }
  }, [query])

  const response = useBlogsConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const { variables } = response

  const [inited, initedOn] = useBoolean(false)

  useEffect(() => initedOn(), [initedOn])

  return (
    <>
      <Head>
        <title>Блоги</title>
        <meta name="description" content="Все блоги" />
      </Head>

      {inited && (
        <View
          objects={response.data?.resources || []}
          count={response.data?.resourcesCount || 0}
          limit={variables?.first}
          page={page}
        />
      )}
    </>
  )
}

BlogsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: BlogsConnectionDocument,

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

export default BlogsPage
