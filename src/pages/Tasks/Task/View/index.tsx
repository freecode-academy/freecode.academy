import React, { useCallback, useContext, useMemo, useState } from 'react'
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
import TaskTaskTechnologies from './TaskTaskTechnologies'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import Comments from './Comments'

const TaskView: React.FC<TaskViewProps> = ({ object, loading, ...other }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext
  const user = context.user

  const timersList = useMemo(() => {
    const timers = object.Timers || []

    if (!timers.length) {
      return null
    }

    return (
      <TimersView count={timers.length} objects={timers} loading={loading} />
    )
  }, [object.Timers, loading])

  const buttons = useMemo(() => {
    return <TaskButtons object={object} />
  }, [object])

  const [opened, setOpened] = useState(false)

  const inEditMode = opened

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
        task={object}
        options={{
          variables: {
            where: {
              id: object.id,
            },
            data: {},
          },
        }}
        onCancel={onCancel}
        onSuccess={onCancel}
      />
    )
  }, [onCancel, opened, object])

  const lesson = useMemo(() => {
    if (object.CodeChallengeCompletion) {
      const codeChallenge = object.CodeChallengeCompletion.CodeChallenge
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
  }, [object.CodeChallengeCompletion])

  /**
   * Список технологий, необходимых для выполнения задачи
   */
  const taskTechnologies = useMemo(() => {
    return (
      <TaskTaskTechnologies
        object={object}
        user={user}
        inEditMode={inEditMode}
      />
    )
  }, [inEditMode, object, user])

  /**
   * Комментарии
   */
  const comments = useMemo(() => {
    return <Comments task={object} />
  }, [object])

  return useMemo(() => {
    return (
      <TaskViewStyled {...other}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs>
            <Typography variant="title">{object.name}</Typography>
          </Grid>

          <Grid item>
            <TaskStatus value={object.status} />
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

        {object.TaskProjects?.map((n) => {
          const project = n.Project
          return (
            <div key={project.id}>
              <p>
                Проект: <ProjectLink object={project} />
              </p>
            </div>
          )
        })}
        <table>
          <tbody>
            <td>Планируемый запуск: </td>
            <td>
              {object.startDatePlaning
                ? moment(object.startDatePlaning).format('L')
                : null}
            </td>
            <td>Дата начала: </td>
            <td>
              {object.startDate ? moment(object.startDate).format('L') : null}
            </td>
            <td>Планируемое завершение: </td>
            <td>
              {object.endDatePlaning
                ? moment(object.endDatePlaning).format('L')
                : null}
            </td>
            <td>Дата завершения: </td>
            <td>
              {object.endDate ? moment(object.endDate).format('L') : null}
            </td>
          </tbody>
        </table>

        {lesson}

        {object.content ? (
          <>
            <Typography variant="subheading">Описание задачи</Typography>
            <Editor editorKey="object-editor" value={object.content} />
          </>
        ) : null}

        {form}

        {taskTechnologies}

        {timersList}

        {comments}
      </TaskViewStyled>
    )
  }, [
    other,
    object.name,
    object.status,
    object.TaskProjects,
    object.startDatePlaning,
    object.startDate,
    object.endDatePlaning,
    object.endDate,
    object.content,
    buttons,
    opened,
    startEdit,
    lesson,
    form,
    taskTechnologies,
    timersList,
    comments,
  ])
}

export default TaskView
