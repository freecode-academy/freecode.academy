import React from 'react'
import {
  TimersConnectionQueryVariables,
  TimersConnectionTimerFragment,
} from 'src/gql/generated'
import PaginationWithStyles from 'src/components/Pagination'
import { TimerCard } from './TimerCard'
import { TimersViewStyled, TimersGrid } from './styles'

type TimersViewProps = {
  objects: TimersConnectionTimerFragment[]
  loading: boolean
  count?: number
  page?: number
  variables?: TimersConnectionQueryVariables
}

export const TimersView: React.FC<TimersViewProps> = ({
  objects,
  count,
  page,
  variables,
}) => {
  return (
    <TimersViewStyled>
      <TimersGrid>
        {objects.map((timer) => (
          <TimerCard key={timer.id} timer={timer} />
        ))}
      </TimersGrid>

      <PaginationWithStyles
        total={count ?? 0}
        page={page ?? 0}
        limit={variables?.first}
      />
    </TimersViewStyled>
  )
}
