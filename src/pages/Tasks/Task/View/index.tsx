import React, { useMemo } from 'react'
import { TaskViewProps } from './interfaces'
import { TaskViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'

import ProjectLink from 'src/uikit/Link/Project'
import TimersView from 'src/pages/Timers/View'
import Grid from 'src/uikit/Grid'
import TaskStatus from '../../TaskStatus'
import TaskButtons from '../../View/Task/TaskButtons'

const TaskView: React.FC<TaskViewProps> = ({
  object: task,
  loading,
  ...other
}) => {
  const timersList = useMemo(() => {
    const timers = task.Timers || []

    if (!timers.length) {
      return null
    }

    return (
      <TimersView count={timers.length} objects={timers} loading={loading} />
    )
  }, [task.Timers, loading])

  const buttons = useMemo(() => {
    return <TaskButtons object={task} />
  }, [task])

  return useMemo(() => {
    return (
      <TaskViewStyled {...other}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs>
            <Typography variant="title">{task.name}</Typography>
          </Grid>
          <Grid item>
            <TaskStatus value={task.status} />
          </Grid>
          <Grid item>{buttons}</Grid>
        </Grid>

        {task.TaskProjects?.map((n) => {
          const project = n.Project
          return (
            <div key={project.id}>
              Проект: <ProjectLink object={project} />
            </div>
          )
        })}

        {timersList}
      </TaskViewStyled>
    )
  }, [buttons, other, task.TaskProjects, task.name, task.status, timersList])
}

export default TaskView
