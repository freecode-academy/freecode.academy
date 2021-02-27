import React, { useCallback, useEffect, useMemo, useState } from 'react'
import StartTimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/StartTimerButton'
import TimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/TimerButton'
import AddIcon from 'material-ui-icons/Add'
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
          <div>{timer}</div>
          <div className="task">
            <div>
              <Link href={`/tasks/${task.id}`}>
                <a title={task.name}>{task.name}</a>
              </Link>{' '}
              ({task.status})
            </div>
            {projects
              ? projects
                  .map((project) => {
                    return (
                      <small key={project.id}>
                        <OfficeProjectPageViewTaskProject
                          project={project}
                          filterByProject={filterByProject}
                        />
                      </small>
                    )
                  })
                  .reduce<React.ReactNode[]>(
                    (curr, next) =>
                      !curr.length ? [next] : [curr, ', ', next],
                    []
                  )
              : null}
          </div>
          <div className="timer">{duration}</div>
          {info}
          {addSubtaskButton}
        </OfficeTaskListItemStyled>

        {createSubTask}

        {childTasks}
      </OfficeProjectPageViewTaskStyled>
    )
  }, [
    timer,
    task.id,
    task.name,
    task.status,
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
