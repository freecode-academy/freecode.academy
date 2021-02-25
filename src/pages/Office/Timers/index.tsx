import React, { useContext, useMemo, useState } from 'react'
import {
  TimersConnectionQueryVariables,
  useTimersConnectionQuery,
  TimersConnectionTimerFragment,
  TimerOrderByInput,
} from 'src/modules/gql/generated'

import moment from 'moment'

import View from './View'

import { Page } from '../../_App/interfaces'
import { NextSeo } from 'next-seo'
import OfficeContext from 'src/pages/_App/layouts/OfficeLayout/Context'

const OfficeTimersPage: Page = () => {
  const context = useContext(OfficeContext)

  const [date, setDate] = useState(moment())

  const user = context?.user

  /**
   * Выводить таймеры только для текущего пользователя
   */
  const [currentUserOnly, setCurrentUserOnly] = useState(true)

  const variables = useMemo<TimersConnectionQueryVariables>(() => {
    return {
      orderBy: TimerOrderByInput.CREATEDAT_DESC,
      where: {
        createdAt_lte: moment(`${date.format('YYYY-MM-DD')}T23:59:59`).toDate(),
        createdAt_gte: moment(`${date.format('YYYY-MM-DD')}T00:00:00`).toDate(),
        CreatedBy:
          currentUserOnly && user
            ? {
                id: user.id,
              }
            : undefined,
      },
    }
  }, [user, currentUserOnly, date])

  const response = useTimersConnectionQuery({
    variables,
    onError: console.error,
  })

  const objects = useMemo(() => {
    const objects: TimersConnectionTimerFragment[] = []

    return (
      response.data?.objectsConnection.edges.reduce((curr, next) => {
        if (next?.node) {
          curr.push(next.node)
        }

        return curr
      }, objects) ?? []
    )
  }, [response.data?.objectsConnection.edges])

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Лог выполнения" />

        <View
          timers={objects}
          date={date}
          setDate={setDate}
          currentUserOnly={currentUserOnly}
          setCurrentUserOnly={setCurrentUserOnly}
          user={user}
        />
      </>
    )
  }, [currentUserOnly, date, objects, user])
}

OfficeTimersPage.getInitialProps = async () => {
  return {
    layout: {
      variant: 'office',
    },
  }
}

export default OfficeTimersPage
