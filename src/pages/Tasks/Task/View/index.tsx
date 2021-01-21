import React, { useCallback, useMemo, useState } from 'react'
import { TaskViewProps } from './interfaces'
import { TaskViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'

import ProjectLink from 'src/uikit/Link/Project'
import TimersView from 'src/pages/Timers/View'
import Grid from 'src/uikit/Grid'
import TaskStatus from '../../TaskStatus'
import TaskButtons from '../../View/Task/TaskButtons'
import Editor from 'src/uikit/Editor'
import UpdateTaskForm from './form/UpdateTask'
import IconButton from 'material-ui/IconButton'
import EditModeIcon from 'material-ui-icons/ModeEdit'
import moment from 'moment'
import Link from 'next/link'

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

  const [opened, setOpened] = useState(false)

  const startEdit = useCallback(() => {
    setOpened(true)
  }, [])

  const onCancel = useCallback(() => {
    setOpened(false)
  }, [])

  const form = useMemo(() => {
    if (!opened) {
      return null
    }

    return (
      <UpdateTaskForm
        task={task}
        options={{
          variables: {
            where: {
              id: task.id,
            },
            data: {},
          },
        }}
        onCancel={onCancel}
        onSuccess={onCancel}
      />
    )
  }, [onCancel, opened, task])

  const lesson = useMemo(() => {
    if (task.CodeChallengeCompletion) {
      const codeChallenge = task.CodeChallengeCompletion.CodeChallenge
      const block = codeChallenge.Block
      const rootBlock = block.Parent

      const parent = rootBlock ? (
        <span>
          <Link href={`/learn/sections/${rootBlock.id}`}>
            <a title={rootBlock.name || ''}>{rootBlock.name}</a>
          </Link>{' '}
          /
        </span>
      ) : null

      return (
        <div>
          <p>
            Урок: {parent}{' '}
            <Link href={`/learn/sections/${block.id}`}>
              <a title={block.name || ''}>{block.name}</a>
            </Link>{' '}
            /{' '}
            <Link href={`/learn/exercises/${codeChallenge.id}`}>
              <a title={codeChallenge.localeTitle || codeChallenge.name || ''}>
                {codeChallenge.localeTitle || codeChallenge.name}
              </a>
            </Link>
          </p>
        </div>
      )
    }
  }, [task.CodeChallengeCompletion])

  return useMemo(() => {
    return (
      <TaskViewStyled {...other}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs>
            <Typography variant="title">{task.name}</Typography>
            Планируемая дата начала:{' '}
            {task.startDatePlaning
              ? moment(task.startDatePlaning).format('lll')
              : null}
          </Grid>
          <Grid item xs>
            Дата начала:{' '}
            {task.startDate ? moment(task.startDate).format('lll') : null}
          </Grid>
          <Grid item xs>
            Планируемая дата завершения:{' '}
            {task.endDatePlaning
              ? moment(task.endDatePlaning).format('lll')
              : null}
          </Grid>
          <Grid item xs>
            Дата завершения:{' '}
            {task.endDate ? moment(task.endDate).format('lll') : null}
          </Grid>
          <Grid item>
            <TaskStatus value={task.status} />
          </Grid>
          <Grid item>{buttons}</Grid>
          <Grid item>
            {opened ? null : (
              <IconButton title="Редактировать" onClick={startEdit}>
                <EditModeIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>

        {task.TaskProjects?.map((n) => {
          const project = n.Project
          return (
            <div key={project.id}>
              <p>
                Проект: <ProjectLink object={project} />
              </p>
            </div>
          )
        })}

        {lesson}

        {task.content ? (
          <>
            <Typography variant="subheading">Описание задачи</Typography>
            <Editor editorKey="task-editor" value={task.content} />
          </>
        ) : null}

        {form}

        {timersList}
      </TaskViewStyled>
    )
  }, [
    buttons,
    form,
    lesson,
    opened,
    other,
    startEdit,
    task.TaskProjects,
    task.content,
    task.name,
    task.startDate,
    task.status,
    timersList,
    task.startDatePlaning,
    task.endDatePlaning,
    task.endDate,
  ])
}

export default TaskView
