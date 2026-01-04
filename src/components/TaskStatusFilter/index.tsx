import React, { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TaskStatus, TaskWhereInput } from 'src/gql/generated'
import { TaskStatusBadge } from 'src/components/StatusBadge'
import { INCOMPLETED_STATUSES } from 'src/hooks/useTasksFilter'
import {
  TaskStatusFilterStyled,
  TaskStatusFilterLabelStyled,
  TaskStatusFilterButtonsStyled,
  TaskStatusFilterClearButtonStyled,
} from './styles'

const COMPLETED_STATUSES: TaskStatus[] = [
  TaskStatus.DONE,
  TaskStatus.COMPLETED,
  TaskStatus.REJECTED,
]

const ALL_STATUSES: TaskStatus[] = [
  ...INCOMPLETED_STATUSES,
  ...COMPLETED_STATUSES,
]

const areArraysEqual = (a: TaskStatus[], b: TaskStatus[]) => {
  if (a.length !== b.length) return false
  const sortedA = [...a].sort()
  const sortedB = [...b].sort()
  return sortedA.every((val, idx) => val === sortedB[idx])
}

const buildFilterUrl = (
  router: ReturnType<typeof useRouter>,
  filters: TaskWhereInput
) => {
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

  return {
    pathname: router.pathname,
    query: newQuery,
  }
}

export const TaskStatusFilter: React.FC = () => {
  const router = useRouter()

  const selectedStatuses = useMemo(() => {
    const queryWhere = router.query.where
    if (queryWhere && typeof queryWhere === 'string') {
      try {
        const parsed: TaskWhereInput = JSON.parse(
          decodeURIComponent(queryWhere)
        )
        return parsed?.status?.in || []
      } catch {
        return INCOMPLETED_STATUSES
      }
    }
    return INCOMPLETED_STATUSES
  }, [router.query.where])

  const isIncompletedActive = useMemo(
    () => areArraysEqual(selectedStatuses, INCOMPLETED_STATUSES),
    [selectedStatuses]
  )

  const hasSelection = selectedStatuses.length > 0

  const incompletedUrl = useMemo(() => {
    if (isIncompletedActive) {
      return buildFilterUrl(router, {})
    }
    return buildFilterUrl(router, { status: { in: [...INCOMPLETED_STATUSES] } })
  }, [isIncompletedActive, router])

  const getStatusUrl = (status: TaskStatus) => {
    const baseStatuses = isIncompletedActive ? [] : [...selectedStatuses]
    const index = baseStatuses.indexOf(status)

    if (index > -1) {
      baseStatuses.splice(index, 1)
    } else {
      baseStatuses.push(status)
    }

    if (baseStatuses.length > 0) {
      return buildFilterUrl(router, { status: { in: baseStatuses } })
    }
    return buildFilterUrl(router, {})
  }

  const clearUrl = useMemo(() => buildFilterUrl(router, {}), [router])

  return (
    <TaskStatusFilterStyled>
      <TaskStatusFilterLabelStyled>Status:</TaskStatusFilterLabelStyled>
      <TaskStatusFilterButtonsStyled>
        <Link href={incompletedUrl} shallow>
          <TaskStatusFilterClearButtonStyled
            as="span"
            $active={isIncompletedActive}
          >
            Incompleted
          </TaskStatusFilterClearButtonStyled>
        </Link>
        {ALL_STATUSES.map((status) => (
          <Link key={status} href={getStatusUrl(status)} shallow>
            <TaskStatusBadge
              status={status}
              active={!isIncompletedActive && selectedStatuses.includes(status)}
            />
          </Link>
        ))}
      </TaskStatusFilterButtonsStyled>
      {hasSelection && !isIncompletedActive && (
        <Link href={clearUrl} shallow>
          <TaskStatusFilterClearButtonStyled as="span">
            Clear
          </TaskStatusFilterClearButtonStyled>
        </Link>
      )}
    </TaskStatusFilterStyled>
  )
}
