import React from 'react'

import { styles, ProjectView as BaseProjectView } from '../../Project'

import withStyles from 'material-ui/styles/withStyles'

import Typography from 'material-ui/Typography'

import { CardContent } from 'material-ui/Card'

import TasksListView from '../../Project/Tasks'
import { ProjectsListProjectProps } from './interfaces'
import Link from 'next/link'
import { TasksListProps } from '../../Project/Tasks/interfaces'
// import { Project } from 'src/modules/gql/generated'

class ProjectView extends BaseProjectView<ProjectsListProjectProps> {
  static defaultProps = {
    ...BaseProjectView.defaultProps,
    classes: {},
  }

  renderTasks() {
    const { id: projectId, ProjectTasks } = this.getObjectWithMutations() || {}

    const Tasks: TasksListProps['tasks'] = []

    ProjectTasks?.forEach((n) => {
      n.Task && Tasks.push(n.Task)
    })

    const { tasksLimit } = this.props

    return Tasks ? (
      <CardContent>
        <Typography variant="subheading">Задачи в проекте</Typography>

        <TasksListView
          tasks={Tasks}
          tasksLimit={tasksLimit}
          // showDetails={false}
        />

        <Link href={`/tasks/create/${projectId}`}>
          <a>
            <Typography>Поставить задачу</Typography>
          </a>
        </Link>
      </CardContent>
    ) : null
  }
}

export default withStyles<any>(styles)((props: ProjectsListProjectProps) => (
  <ProjectView {...props} />
))
