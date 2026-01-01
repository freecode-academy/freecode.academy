import Head from 'next/head'
import React, { useEffect, useMemo } from 'react'
import {
  ResourceType,
  TopicsConnectionDocument,
  TopicsConnectionQueryVariables,
  useTopicsConnectionQuery,
} from 'src/gql/generated'

import { Page, NextPageContextCustom } from '../_App/interfaces'
import { useRouter, NextRouter } from 'next/router'
import { TopicsView } from './View'
import { useBoolean } from 'src/hooks/useBoolean'

const first = 10

const topicsVariables: TopicsConnectionQueryVariables = {
  where: {
    type: {
      equals: ResourceType.TOPIC,
    },
  },
  first,
}

export const getTopicsVariables = (
  router: NextRouter | NextPageContextCustom,
  where?: TopicsConnectionQueryVariables['where']
) => {
  let skip: number | undefined

  const page =
    (router.query.page &&
      typeof router.query.page === 'string' &&
      parseInt(router.query.page)) ||
    0

  if (page > 1) {
    skip = (page - 1) * first
  }

  return {
    ...topicsVariables,
    where: {
      ...topicsVariables.where,
      ...where,
    },
    skip,
    first,
    page,
  }
}

export const TopicsPage: Page = () => {
  const router = useRouter()

  const { page, ...queryVariables } = useMemo(() => {
    return getTopicsVariables(router)
  }, [router])

  const response = useTopicsConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const { variables } = response

  const [inited, initedOn] = useBoolean(false)

  useEffect(() => initedOn(), [initedOn])

  return (
    <>
      <Head>
        <title>Publications — Articles & Tutorials</title>
        <meta
          name="description"
          content="Read articles, tutorials, and insights from tech experts. Learn web development, AI, and modern technologies."
        />
      </Head>

      {inited && response.data?.resources.length && (
        <TopicsView
          // loading={loading}
          objects={response.data?.resources}
          count={response.data?.resourcesCount || 0}
          limit={variables?.first}
          page={page}
        />
      )}
    </>
  )
}

TopicsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: TopicsConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: getTopicsVariables(context),
  })

  return {}
}
