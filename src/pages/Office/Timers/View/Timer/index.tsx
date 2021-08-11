import React, { useMemo } from 'react'
import { OfficeTimersTimerProps } from './interfaces'

import moment from 'moment'

// TODO Надо создать самостоятельный компонент, так как возникают коллизии со свойствами объекта
import OfficeProjectPageViewTask from 'src/pages/Office/Projects/Project/View/Tasks/Task'
import { OfficeProjectPageViewTaskProps } from 'src/pages/Office/Projects/Project/View/Tasks/Task/interfaces'

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

  const projects = useMemo(() => {
    const projects: OfficeProjectPageViewTaskProps['projects'] = []

    timer.Task?.TaskProjects?.forEach((n) => {
      n.Project && projects.push(n.Project)
    })

    return projects
  }, [timer.Task?.TaskProjects])

  return useMemo(() => {
    if (!timer.Task) {
      return null
    }

    return (
      <>
        <OfficeProjectPageViewTask
          task={timer.Task}
          projects={projects}
          activeTimer={!timer.stopedAt ? timer : null}
          info={info}
          filterByProject={filterByProject}
          CreatedBy={timer.CreatedBy}
        />
      </>
    )
  }, [timer, projects, info, filterByProject])
}

export default OfficeTimersTimer
