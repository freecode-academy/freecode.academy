import Head from 'next/head'
import React, { useMemo } from 'react'
import {
  TasksConnectionDocument,
  TasksConnectionQueryVariables,
  useTasksConnectionQuery,
} from 'src/gql/generated'
import { ParsedUrlQuery } from 'querystring'

import { TasksView as View } from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { parseFiltersFromUrl } from 'src/hooks/useTasksFilter'

const first = 10

const getVariables = (query: ParsedUrlQuery): TasksConnectionQueryVariables => {
  const where = parseFiltersFromUrl(query.where)
  const queryPage = query.page
  const page =
    (queryPage && typeof queryPage === 'string' && parseInt(queryPage)) || 1
  const skip = page > 1 ? (page - 1) * first : undefined

  return {
    where,
    first,
    skip,
    timersWhere: { stopedAt: null },
  }
}

export const TasksPage: Page = () => {
  const router = useRouter()

  const variables = useMemo(() => getVariables(router.query), [router.query])

  const page = useMemo(() => {
    const queryPage = router.query.page
    return (
      (queryPage && typeof queryPage === 'string' && parseInt(queryPage)) || 1
    )
  }, [router.query.page])

  const response = useTasksConnectionQuery({
    variables,
    fetchPolicy: 'cache-and-network',
    onError: console.error,
  })

  return useMemo(() => {
    return (
      <>
        <Head>
          <title>Tasks — Project Work & Collaboration</title>
          <meta
            name="description"
            content="Browse tasks from real projects. Find opportunities to contribute, learn, and collaborate with experts."
          />
        </Head>
        <View
          objects={response.data?.tasks || []}
          total={response.data?.tasksCount || 0}
          limit={variables?.first}
          page={page}
        />
      </>
    )
  }, [page, response.data?.tasks, response.data?.tasksCount, variables?.first])
}

TasksPage.getInitialProps = async (context) => {
  const { apolloClient, query } = context

  await apolloClient.query({
    query: TasksConnectionDocument,
    variables: getVariables(query),
  })

  return {}
}
