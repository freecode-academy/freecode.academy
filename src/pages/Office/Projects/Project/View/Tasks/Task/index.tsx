import React, { useCallback, useEffect, useMemo, useState } from 'react'
import StartTimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/StartTimerButton'
import TimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/TimerButton'
import AddIcon from 'material-ui-icons/Add'
import HelpIcon from 'material-ui-icons/Help'
import moment from 'moment'
import { OfficeProjectPageViewTaskProps } from './interfaces'
import {
  OfficeProjectPageViewTaskStyled,
  OfficeTaskListItemStyled,
} from './styles'
import Link from 'next/link'
import useActiveTimer from 'src/hooks/useActiveTimer'
import OfficeProjectPageViewTaskProject from './Project'
import CreateSubtask from './CreateSubtask'
import { IconButton } from 'material-ui'
import TaskChangeStatusButton from './ChangeStatusButton'
import UikitUserLink from 'src/uikit/Link/User'

const OfficeProjectPageViewTask: React.FC<OfficeProjectPageViewTaskProps> = ({
  task,
  projects,
  project,
  info,
  activeTimer,
  filterByProject,
}) => {
  const { stopTimerClickHandler, stopTimerLoading } = useActiveTimer()

  /**
   * В текущей задаче есть активный таймер выполнения
   */
  const isActive = activeTimer && activeTimer.Task.id === task.id

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    if (!isActive) {
      return
    }

    const intervalId = setInterval(() => {
      //
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [isActive, setTime])

  const timer = useMemo(() => {
    if (isActive && activeTimer) {
      /**
       * Пытаемся найти проект по задаче
       */

      return (
        <TimerButton
          status="play"
          onClick={stopTimerClickHandler}
          timerId={activeTimer.id}
          title="Остановить таймер"
          disabled={stopTimerLoading}
        />
      )
    }
    /**
     * Иначе пытаемся получить крайнюю задачу
     */
    //  else
    return <StartTimerButton task={task} />
  }, [activeTimer, isActive, stopTimerClickHandler, stopTimerLoading, task])

  const duration = useMemo(() => {
    if (!isActive || !activeTimer) {
      return null
    }

    return (
      <span className="duration">
        {moment
          .utc(moment(time).diff(activeTimer.createdAt))
          .format('HH:mm:ss')}
      </span>
    )
  }, [activeTimer, isActive, time])

  /**
   * Состояние формы добавления подзадачи открыта/закрыта
   */
  const [createTaskFormOpened, createTaskFormOpenedSetter] = useState(false)

  /**
   * Открываем форму
   */
  const createTaskFormOpen = useCallback(() => {
    createTaskFormOpenedSetter(true)
  }, [])

  /**
   * Закрываем форму
   */
  const createTaskFormCancel = useCallback(() => {
    createTaskFormOpenedSetter(false)
  }, [])

  /**
   * При успешном сохранении задачи закрываем форму
   */
  const createTaskonSuccess = useCallback(() => {
    createTaskFormCancel()
  }, [createTaskFormCancel])

  /**
   * Создание подзадачи
   */
  const createSubTask = useMemo(() => {
    if (!project) {
      return null
    }

    return (
      <CreateSubtask
        opened={createTaskFormOpened}
        cancel={createTaskFormCancel}
        onSuccess={createTaskonSuccess}
        options={{
          variables: {
            data: {
              name: '',
              Project: {
                connect: {
                  id: project.id,
                },
              },
              Parent: {
                connect: {
                  id: task.id,
                },
              },
            },
          },
        }}
      />
    )
  }, [
    createTaskFormCancel,
    createTaskFormOpened,
    createTaskonSuccess,
    project,
    task.id,
  ])

  /**
   * Кнопка добавления подзадачи
   */
  const addSubtaskButton = useMemo(() => {
    // TODO вообще задачи имеют связь один-ко-многим проектам. В дальнейшем надо будет переделать.
    /**
     * Если проект не указан, то не выводим кнопку
     */
    if (!project) {
      return null
    }

    return (
      <IconButton onClick={createTaskFormOpen} title="Добавить подзадачу">
        <AddIcon />
      </IconButton>
    )
  }, [createTaskFormOpen, project])

  /**
   * Рендерим дочерние таски
   */
  const childTasks = useMemo(() => {
    return task.children?.map((childTask) => {
      return (
        <OfficeProjectPageViewTask
          key={childTask.id}
          activeTimer={activeTimer}
          projects={projects}
          task={childTask}
          project={project}
        />
      )
    })
  }, [activeTimer, projects, task.children, project])

  return useMemo(() => {
    return (
      <OfficeProjectPageViewTaskStyled>
        <OfficeTaskListItemStyled>
          <UikitUserLink user={task.CreatedBy} showName={false} />
          {timer}
          <div className="task">
            <div className="task-info">
              <Link href={`/tasks/${task.id}`}>
                <a title={task.name}>{task.name}</a>
              </Link>{' '}
              ({task.status}){' '}
              {task.needHelp ? (
                <HelpIcon color="primary" titleAccess="Нужна помощь" />
              ) : null}
            </div>
            <div className="subinfo">
              {projects
                ? projects
                    .map((project) => {
                      return (
                        <OfficeProjectPageViewTaskProject
                          key={project.id}
                          project={project}
                          filterByProject={filterByProject}
                        />
                      )
                    })
                    .reduce<React.ReactNode[]>(
                      (curr, next) =>
                        !curr.length ? [next] : [curr, ', ', next],
                      []
                    )
                : null}{' '}
              {task.startDate ? (
                <span title="Дата начала выполнения задачи">
                  {moment(task.startDate).format('DD-MM HH:mm:ss')}
                </span>
              ) : null}{' '}
              {task.endDate ? (
                <span title="Дата завершения выполнения задачи">
                  {moment(task.endDate).format('DD-MM HH:mm:ss')}
                </span>
              ) : null}
            </div>
          </div>
          <div className="timer">{duration}</div>
          {info}
          <TaskChangeStatusButton task={task} />
          {addSubtaskButton}
        </OfficeTaskListItemStyled>

        {createSubTask}

        {childTasks}
      </OfficeProjectPageViewTaskStyled>
    )
  }, [
    timer,
    task,
    projects,
    duration,
    info,
    addSubtaskButton,
    createSubTask,
    childTasks,
    filterByProject,
  ])
}

export default OfficeProjectPageViewTask
