import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { TaskStatus, TaskWhereInput } from 'src/gql/generated'

export const INCOMPLETED_STATUSES: TaskStatus[] = [
  TaskStatus.NEW,
  TaskStatus.ACCEPTED,
  TaskStatus.PROGRESS,
  TaskStatus.PAUSED,
  TaskStatus.DISCUSS,
  TaskStatus.REVISIONSREQUIRED,
  TaskStatus.APPROVED,
]

export const getDefaultTaskFilters = (): TaskWhereInput => ({
  status: { in: [...INCOMPLETED_STATUSES] },
})

export const parseFiltersFromUrl = (
  queryWhere: string | string[] | undefined
): TaskWhereInput => {
  if (queryWhere && typeof queryWhere === 'string') {
    try {
      return JSON.parse(decodeURIComponent(queryWhere))
    } catch {
      return getDefaultTaskFilters()
    }
  }
  return getDefaultTaskFilters()
}

type UseTasksFilterOptions = {
  baseWhere?: TaskWhereInput
}

export const useTasksFilter = (options: UseTasksFilterOptions = {}) => {
  const { baseWhere = {} } = options
  const router = useRouter()

  const statusFilters = useMemo<TaskWhereInput>(() => {
    return parseFiltersFromUrl(router.query.where)
  }, [router.query.where])

  const where = useMemo<TaskWhereInput>(() => {
    return {
      ...baseWhere,
      ...statusFilters,
    }
  }, [baseWhere, statusFilters])

  const setFilters = useCallback(
    (filters: TaskWhereInput) => {
      const newQuery: Record<string, string | string[]> = {}

      Object.keys(router.query).forEach((key) => {
        if (key !== 'where' && key !== 'page') {
          const value = router.query[key]
          if (value) {
            newQuery[key] = value
          }
        }
      })

      if (Object.keys(filters).length > 0) {
        newQuery.where = encodeURIComponent(JSON.stringify(filters))
      }

      router.push(
        {
          pathname: router.pathname,
          query: newQuery,
        },
        undefined,
        { shallow: true }
      )
    },
    [router]
  )

  return {
    where,
    filters: statusFilters,
    setFilters,
  }
}
