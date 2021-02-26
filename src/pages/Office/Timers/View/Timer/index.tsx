import React, { useMemo } from 'react'
import { OfficeTimersTimerProps } from './interfaces'

import moment from 'moment'
import OfficeProjectPageViewTask from 'src/pages/Office/Projects/Project/View/Tasks/Task'

const OfficeTimersTimer: React.FC<OfficeTimersTimerProps> = ({
  timer,
  filterByProject,
}) => {
  const info = useMemo(() => {
    return (
      <>
        {timer.stopedAt ? (
          <>
            {moment
              .utc(moment(timer.stopedAt).diff(moment(timer.createdAt)))
              .format('HH:mm:ss')}
          </>
        ) : null}
      </>
    )
  }, [timer.createdAt, timer.stopedAt])

  return useMemo(() => {
    return (
      <>
        <OfficeProjectPageViewTask
          task={timer.Task}
          projects={timer.Task.TaskProjects?.map((n) => n.Project) || []}
          activeTimer={!timer.stopedAt ? timer : null}
          info={info}
          filterByProject={filterByProject}
        />
      </>
    )
  }, [timer, info, filterByProject])
}

export default OfficeTimersTimer
