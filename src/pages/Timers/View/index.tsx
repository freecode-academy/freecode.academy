import React from 'react'

import {
  TimersConnectionQueryVariables,
  TimersConnectionTimerFragment,
} from 'src/gql/generated'

type TimersViewProps = {
  objects: TimersConnectionTimerFragment[]
  loading: boolean
  count?: number
  page?: number
  variables?: TimersConnectionQueryVariables
}

export const TimersView: React.FC<TimersViewProps> = () => {
  return <>TimersView</>
}
