import React, { useMemo } from 'react'
import { TaskStatus } from 'src/modules/gql/generated'

import { OfficeProjectPageViewProps } from './interfaces'
import {
  OfficeProjectPageViewStyled,
  OfficeProjectPageViewTasksSectionStyled,
} from './styles'
import OfficeProjectPageViewTask from './Task'
import { OfficeProjectPageViewTaskProps } from './Task/interfaces'

const OfficeProjectPageView: React.FC<OfficeProjectPageViewProps> = ({
  project,
}) => {
  const tasks = useMemo(() => {
    const sections: JSX.Element[] = []

    const activeTasks: OfficeProjectPageViewTaskProps['task'][] = []
    const completedTasks: OfficeProjectPageViewTaskProps['task'][] = []
    const otherTasks: OfficeProjectPageViewTaskProps['task'][] = []

    project.ProjectTasks?.forEach(({ Task }) => {
      switch (Task.status) {
        case TaskStatus.COMPLETED:
        case TaskStatus.DONE:
          completedTasks.push(Task)

          break

        case TaskStatus.REJECTED:
          otherTasks.push(Task)

          break

        default:
          activeTasks.push(Task)
      }
    })

    if (activeTasks.length) {
      sections.push(
        <OfficeProjectPageViewTasksSectionStyled key="activeTasks">
          {activeTasks.map((task) => {
            return <OfficeProjectPageViewTask key={task.id} task={task} />
          })}
        </OfficeProjectPageViewTasksSectionStyled>
      )
    }

    if (completedTasks.length) {
      sections.push(
        <OfficeProjectPageViewTasksSectionStyled key="completedTasks">
          <span className="header">Завершенные задачи</span>
          {completedTasks.map((task) => {
            return <OfficeProjectPageViewTask key={task.id} task={task} />
          })}
        </OfficeProjectPageViewTasksSectionStyled>
      )
    }

    if (otherTasks.length) {
      sections.push(
        <OfficeProjectPageViewTasksSectionStyled key="otherTasks">
          <span className="header">Остальные задачи</span>
          {otherTasks.map((task) => {
            return <OfficeProjectPageViewTask key={task.id} task={task} />
          })}
        </OfficeProjectPageViewTasksSectionStyled>
      )
    }

    return <>{sections}</>
  }, [project.ProjectTasks])

  return useMemo(() => {
    return (
      <>
        <OfficeProjectPageViewStyled>{tasks}</OfficeProjectPageViewStyled>
      </>
    )
  }, [tasks])
}

export default OfficeProjectPageView
