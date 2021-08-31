import React, { useMemo } from 'react'
import {
  LearnStrategiesConnectionDocument,
  LearnStrategiesConnectionQueryVariables,
  useLearnStrategiesConnectionQuery,
  SortOrder,
} from 'src/modules/gql/generated'

import { LearnStrategiesView } from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'

// const take = 10

function getQueryParams(
  _query: ParsedUrlQuery
): LearnStrategiesConnectionQueryVariables {
  let skip: number | undefined

  // const page =
  //   (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  // if (page > 1) {
  //   skip = (page - 1) * first
  // }

  return {
    // page,
    where: {},
    orderBy: [
      {
        level: SortOrder.ASC,
      },
      {
        name: SortOrder.ASC,
      },
    ],
    // take,
    skip,
  }
}

export const LearnStrategiesPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { ...queryVariables } = useMemo(() => {
    return getQueryParams(query)
  }, [query])

  const response = useLearnStrategiesConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  // const { variables, loading } = response

  return (
    <>
      <NextSeo
        title="Стратегии развития"
        description="Готовые стратегии развития позволяют спланировать обучение программированию"
      />

      <LearnStrategiesView
        // {...queryResult}
        // loading={loading}
        // data={response || null}
        learnStrategies={response.data?.learnStrategies || []}
        // count={response.data?.learnStrategiesCount}
        // variables={variables}
        // page={page}
      />
    </>
  )
}

LearnStrategiesPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: LearnStrategiesConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...getQueryParams(context.query),
    },
  })

  return {}
}
