import React, { useMemo } from 'react'
import Link from 'next/link'
import UikitUserLink from 'src/uikit/Link/User'
import { CalendarEventStyled } from './styles'
import { CalendarEventProps } from './interfaces'
import useActiveTimer from 'src/hooks/useActiveTimer'
import TimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/TimerButton'
import StartTimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/StartTimerButton'
import TaskChangeStatusButton from 'src/pages/Office/Projects/Project/View/Tasks/Task/ChangeStatusButton'
import TaskLink from 'src/uikit/Link/Task'

/**
 * Карточка события в календаре (Задача)
 */
const CalendarEvent: React.FC<CalendarEventProps> = ({
  task,
  eventContent,
  ...other
}) => {
  const { activeTimer, stopTimerClickHandler, stopTimerLoading } =
    useActiveTimer()

  /**
   * В текущей задаче есть активный таймер выполнения
   */
  const isActive = activeTimer && activeTimer.Task.id === task.id

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

  return useMemo(() => {
    if (!task) {
      return <></>
    }

    return (
      <CalendarEventStyled {...other}>
        <b>{eventContent.timeText}</b>
        <i>
          <UikitUserLink user={task?.CreatedBy} size="small" showName={false} />
          <TaskLink object={task}>
            {eventContent.event.title}{' '}
            {task?.status ? `(${task.status})` : null}
          </TaskLink>{' '}
          {timer} <TaskChangeStatusButton task={task} />
        </i>
        <p>
          {task.TaskProjects?.map((n) => (
            <Link key={n.id} href={`/office/projects/${n.Project.id}`}>
              <a title={`Проект "${n.Project.name}"`}>{n.Project.name}</a>
            </Link>
          )).reduce<React.ReactNode[]>(
            (curr, next) => (curr.length ? [curr, ', ', next] : [next]),
            []
          )}
        </p>
      </CalendarEventStyled>
    )
  }, [eventContent.event.title, eventContent.timeText, task, timer, other])
}

export default CalendarEvent
