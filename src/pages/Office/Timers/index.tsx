import React, { useMemo, useState } from 'react'
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

const OfficeTimersPage: Page = () => {
  const [date, setDate] = useState(moment())

  const variables = useMemo<TimersConnectionQueryVariables>(() => {
    return {
      orderBy: TimerOrderByInput.CREATEDAT_DESC,
      where: {
        createdAt_lte: moment(`${date.format('YYYY-MM-DD')}T23:59:59`).toDate(),
        createdAt_gte: moment(`${date.format('YYYY-MM-DD')}T00:00:00`).toDate(),
      },
    }
  }, [date])

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

  return (
    <>
      <NextSeo title="Лог выполнения" />

      <View timers={objects} date={date} setDate={setDate} />
    </>
  )
}

OfficeTimersPage.getInitialProps = async () => {
  return {
    layout: {
      variant: 'office',
    },
  }
}

export default OfficeTimersPage
