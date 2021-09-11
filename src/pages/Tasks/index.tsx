import Head from 'next/head'
import React, { useCallback, useMemo } from 'react'
import {
  TasksConnectionDocument,
  TasksConnectionQueryVariables,
  useTasksConnectionQuery,
  TaskWhereInput,
  EnumTaskStatusFilter,
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
  const { page: queryPage, needHelp, where: queryWhere, status_in } = query

  let skip: number | undefined

  const where: TaskWhereInput = {}

  /**
   * Берем условия фильтрации из УРЛа
   */
  if (queryWhere && typeof queryWhere === 'string') {
    try {
      const filter: TaskWhereInput = JSON.parse(decodeURIComponent(queryWhere))

      Object.assign(where, filter)
    } catch (error) {
      console.error(error)
    }
  }
  // Старое условие фильтрации
  // TODO Надо будет убрать
  else if (status_in && Array.isArray(status_in)) {
    const taskStatuses = status_in as EnumTaskStatusFilter['in']

    where.status = {
      in: taskStatuses,
    }
  }

  const page =
    (queryPage && typeof queryPage === 'string' && parseInt(queryPage)) || 0

  if (page > 1) {
    skip = (page - 1) * first
  }

  if (needHelp && needHelp === 'true') {
    where.needHelp = {
      equals: true,
    }
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
    const variables = {
      ...defaultVariables,
      ...getQueryParams(query),
    }

    return variables
  }, [query])

  const response = useTasksConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

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
          objects={response.data?.tasks || []}
          total={response.data?.tasksCount || 0}
          limit={variables?.first}
          page={page}
          setFilters={setFilters}
        />
      </>
    )
  }, [
    page,
    response.data?.tasks,
    response.data?.tasksCount,
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
