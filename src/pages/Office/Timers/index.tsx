import React, { useContext, useMemo, useState } from 'react'
import {
  TimersConnectionQueryVariables,
  useTimersConnectionQuery,
  SortOrder,
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
    const where: TimersConnectionQueryVariables = {
      orderBy: {
        createdAt: SortOrder.DESC,
      },
      where: {
        createdAt: {
          lte: moment(`${date.format('YYYY-MM-DD')}T23:59:59`).toDate(),
          gte: moment(`${date.format('YYYY-MM-DD')}T00:00:00`).toDate(),
        },
        // CreatedBy:
        //   currentUserOnly && user
        //     ? {
        //         id: user.id,
        //       }
        //     : undefined,
        CreatedBy: currentUserOnly && user ? { equals: user.id } : undefined,
      },
    }

    return where
  }, [user, currentUserOnly, date])

  const response = useTimersConnectionQuery({
    variables,
    onError: console.error,
  })

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Лог выполнения" />

        <View
          timers={response.data?.timers || []}
          date={date}
          setDate={setDate}
          currentUserOnly={currentUserOnly}
          setCurrentUserOnly={setCurrentUserOnly}
          user={user}
        />
      </>
    )
  }, [currentUserOnly, date, response.data?.timers, user])
}

OfficeTimersPage.getInitialProps = async () => {
  return {
    layout: {
      variant: 'office',
    },
  }
}

export default OfficeTimersPage
