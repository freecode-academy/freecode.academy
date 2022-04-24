import React from 'react'
import { ObjectsListView, styles } from 'src/components/view/List'

import moment from 'moment'
import withStyles from 'material-ui/styles/withStyles'
import { TimersViewProps } from './interfaces'
import { ColumnConfig } from 'apollo-cms/dist/DataView/List/Table'
import { TimersConnectionTimerFragment } from 'src/modules/gql/generated'
import UserLink from 'src/uikit/Link/User'
import ProjectLink from 'src/uikit/Link/Project'
import TaskLink from 'src/uikit/Link/Task'
import TaskStatus from '../../Tasks/TaskStatus'

class TimersView<
  P extends TimersViewProps = TimersViewProps
> extends ObjectsListView<P> {
  static defaultProps = {
    ...ObjectsListView.defaultProps,
    title: '',
  }

  renderDate(date: Date | null | undefined) {
    if (!date) {
      return null
    }
    return (
      <span
        style={{
          whiteSpace: 'nowrap',
        }}
      >
        {moment(date).format('DD.MM.YYYY HH:mm:ss')}
      </span>
    )
  }

  getColumns<CC extends TimersConnectionTimerFragment>(): ColumnConfig<CC>[] {
    return [
      {
        id: 'Task',
        key: 'TaskProjects',
        label: 'Проект',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['Task']) => {
          const TaskProjects = value?.TaskProjects

          const Projects = TaskProjects
            ? TaskProjects.map(({ Project }) => Project).filter((n) => n)
            : []

          return Projects && Projects.length
            ? Projects.map<React.ReactNode>((Project, index) => {
                return (
                  <ProjectLink key={Project?.id || index} object={Project} />
                )
              }).reduce((curr, next) => [curr, ', ', next])
            : []
        },
      },
      {
        id: 'Task',
        key: 'Task',
        label: 'Задача',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['Task']) => {
          return value ? <TaskLink object={value} /> : null
        },
      },
      {
        id: 'Task',
        key: 'status',
        label: 'Статус',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['Task']) => {
          const status = value?.status
          return status ? <TaskStatus value={status} /> : null
        },
      },
      {
        id: 'Task',
        key: 'TaskCreatedAt',
        label: 'Дата постановки',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['Task']) => {
          return this.renderDate(value?.createdAt)
        },
      },
      {
        id: 'createdAt',
        label: 'Начало',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['createdAt']) => {
          return this.renderDate(value)
        },
      },
      {
        id: 'stopedAt',
        label: 'Конец',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['stopedAt']) => {
          return this.renderDate(value)
        },
      },
      {
        id: 'CreatedBy',
        key: 'CreatedBy',
        label: 'Кто создал',
        numeric: false,
        disablePadding: true,
        renderer: (value: CC['CreatedBy']) => {
          return value ? <UserLink user={value} /> : null
        },
      },
    ]
  }
}

export default withStyles<any>(styles)((props: TimersViewProps) => (
  <TimersView {...props} />
))
