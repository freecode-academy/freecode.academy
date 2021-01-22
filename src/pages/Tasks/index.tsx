/* eslint-disable @typescript-eslint/ban-ts-ignore */
import Head from 'next/head'
import React, { useCallback, useMemo } from 'react'
import {
  TasksConnectionDocument,
  TasksConnectionQueryVariables,
  useTasksConnectionQuery,
  TasksConnectionTaskFragment,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

const first = 12

const defaultVariables: TasksConnectionQueryVariables = {
  where: {},
  first,
  timersWhere: { stopedAt: null },
}

function getQueryParams(query: ParsedUrlQuery) {
  const { page: queryPage, needHelp, ...where } = query

  let skip: number | undefined

  const page =
    (queryPage && typeof queryPage === 'string' && parseInt(queryPage)) || 0

  if (page > 1) {
    skip = (page - 1) * first
  }

  if (needHelp && needHelp === 'true') {
    // @ts-ignore
    where.needHelp = true
  }

  return {
    page,
    skip,
    first,
    where,
  }
}

const TasksPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...queryVariables } = useMemo(() => {
    return {
      ...defaultVariables,
      ...getQueryParams(query),
    }
  }, [query])

  const response = useTasksConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  const objects = useMemo(() => {
    const objects: TasksConnectionTaskFragment[] = []

    return (
      response.data?.objectsConnection.edges.reduce((curr, next) => {
        if (next?.node) {
          curr.push(next.node)
        }

        return curr
      }, objects) ?? []
    )
  }, [response.data?.objectsConnection.edges])

  const { variables } = response

  const setFilters = useCallback((filters: any) => {
    console.error('setFilters impementation required', filters)
  }, [])

  return useMemo(() => {
    return (
      <>
        <Head>
          <title>Задачи</title>
          <meta name="description" content="Все задачи" />
        </Head>
        <View
          objects={objects}
          total={response.data?.objectsConnection.aggregate.count ?? 0}
          limit={variables?.first}
          page={page}
          setFilters={setFilters}
        />
      </>
    )
  }, [
    objects,
    page,
    response.data?.objectsConnection.aggregate.count,
    setFilters,
    variables?.first,
  ])
}

TasksPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: TasksConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...defaultVariables,
      ...getQueryParams(context.query),
    },
  })

  return {
    // layout: {
    //   variant: 'fullwidth',
    // },
  }
}

export default TasksPage
