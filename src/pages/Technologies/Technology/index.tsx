import React, { useMemo } from 'react'
import {
  useTechnologyQuery,
  TechnologyDocument,
  TechnologyQuery,
  TechnologyQueryVariables,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

function getQueryParams(query: ParsedUrlQuery): TechnologyQueryVariables {
  const id = query.id

  return {
    where: {
      id: id && typeof id === 'string' ? id : '',
    },
    withLearnStrategies: true,
  }
}

const TechnologyPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const queryVariables = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useTechnologyQuery({
    variables: queryVariables,
    onError: console.error,
  })

  return useMemo(() => {
    if (!response.data?.object) {
      return null
    }

    return (
      <>
        <View technology={response.data?.object} />
      </>
    )
  }, [response.data?.object])
}

TechnologyPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  // TODO Fix private rooms access
  const result = await apolloClient.query<TechnologyQuery>({
    query: TechnologyDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...getQueryParams(context.query),
    },
  })
  return {
    statusCode: !result.data.object ? 404 : undefined,
  }
}

export default TechnologyPage
