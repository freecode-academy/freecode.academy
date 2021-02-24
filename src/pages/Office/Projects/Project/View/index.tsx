import React, { useMemo } from 'react'
import { TaskStatus } from 'src/modules/gql/generated'
import { OfficeProjectListSectionStyled } from 'src/pages/Office/components/ui/list/styles'
import { OfficeTitleStyled } from 'src/pages/Office/components/ui/Title/styles'

import { OfficeProjectPageViewProps } from './interfaces'
import { OfficeProjectPageViewStyled } from './styles'
import OfficeProjectPageViewTask from './Task'
import { OfficeProjectPageViewTaskProps } from './Task/interfaces'

import useActiveTimer from 'src/hooks/useActiveTimer'

const OfficeProjectPageView: React.FC<OfficeProjectPageViewProps> = ({
  project,
}) => {
  const { activeTimer } = useActiveTimer()

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
        <OfficeProjectListSectionStyled key="activeTasks">
          {activeTasks.map((task) => {
            return (
              <OfficeProjectPageViewTask
                projects={[project]}
                key={task.id}
                task={task}
                activeTimer={activeTimer}
              />
            )
          })}
        </OfficeProjectListSectionStyled>
      )
    }

    if (completedTasks.length) {
      sections.push(
        <OfficeProjectListSectionStyled key="completedTasks">
          <OfficeTitleStyled>Завершенные задачи</OfficeTitleStyled>
          {completedTasks.map((task) => {
            return (
              <OfficeProjectPageViewTask
                projects={[project]}
                key={task.id}
                task={task}
                activeTimer={activeTimer}
              />
            )
          })}
        </OfficeProjectListSectionStyled>
      )
    }

    if (otherTasks.length) {
      sections.push(
        <OfficeProjectListSectionStyled key="otherTasks">
          <OfficeTitleStyled>Остальные задачи</OfficeTitleStyled>
          {otherTasks.map((task) => {
            return (
              <OfficeProjectPageViewTask
                projects={[project]}
                key={task.id}
                task={task}
                activeTimer={activeTimer}
              />
            )
          })}
        </OfficeProjectListSectionStyled>
      )
    }

    return <>{sections}</>
  }, [activeTimer, project])

  return useMemo(() => {
    return (
      <>
        <OfficeProjectPageViewStyled>{tasks}</OfficeProjectPageViewStyled>
      </>
    )
  }, [tasks])
}

export default OfficeProjectPageView
