import React, { useMemo } from 'react'
import {
  NoticesConnectionQueryVariables,
  useNoticesConnectionQuery,
} from 'src/modules/gql/generated'

import View from './View'

import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'

const first = 10

const defaultVariables: NoticesConnectionQueryVariables = {
  where: {},
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

const NoticesPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return {
      ...defaultVariables,
      ...getQueryParams(query),
    }
  }, [query])

  const response = useNoticesConnectionQuery({
    variables: queryVariables,
  })

  const { variables } = response

  return (
    <>
      <NextSeo
        title="Уведомления"
        description="Все уведомления пользователя"
        noindex
        nofollow
      />

      <View
        notices={response.data?.notices || []}
        pagination={{
          limit: variables?.first || 0,
          page,
          total: response.data?.noticesCount || 0,
        }}
      />
    </>
  )
}

NoticesPage.getInitialProps = async () => {
  return {
    layout: {
      variant: 'office',
    },
  }
}

export default NoticesPage
