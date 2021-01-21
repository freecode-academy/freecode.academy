import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  ProjectsConnectionDocument,
  ProjectsConnectionQueryVariables,
  useProjectsConnectionQuery,
  ProjectsConnectionProjectFragment,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

const first = 12

const defaultVariables: ProjectsConnectionQueryVariables = {
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

const ProjectsPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return {
      ...defaultVariables,
      ...getQueryParams(query),
    }
  }, [query])

  const response = useProjectsConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const objects = useMemo(() => {
    const objects: ProjectsConnectionProjectFragment[] = []

    return (
      response.data?.objectsConnection.edges.reduce((curr, next) => {
        if (next?.node) {
          curr.push(next.node)
        }

        return curr
      }, objects) ?? []
    )
  }, [response.data?.objectsConnection.edges])

  const { variables, loading } = response

  return (
    <>
      <Head>
        <title>Проекты</title>
        <meta name="description" content="Все проекты" />
      </Head>

      <View
        // {...queryResult}
        // data={response || null}
        objects={objects}
        count={response.data?.objectsConnection.aggregate.count}
        loading={loading}
        variables={variables}
        page={page}
      />
    </>
  )
}

ProjectsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: ProjectsConnectionDocument,

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

export default ProjectsPage
