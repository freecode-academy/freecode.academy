import React from 'react'

import { TimersConnectionTimerFragment } from 'src/gql/generated'

type TimerProps = {
  object: TimersConnectionTimerFragment
}

export const Timer: React.FC<TimerProps> = () => {
  return <>Timer</>
}
