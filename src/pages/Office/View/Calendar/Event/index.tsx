import React, { useMemo } from 'react'
import Link from 'next/link'
import UikitUserLink, { UikitUserLinkAvatarSize } from 'src/uikit/Link/User'
import { CalendarEventStyled } from './styles'
import { CalendarEventProps } from './interfaces'
import useActiveTimer from 'src/hooks/useActiveTimer'
import TimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/TimerButton'
import StartTimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/StartTimerButton'

/**
 * Карточка события в календаре (Задача)
 */
const CalendarEvent: React.FC<CalendarEventProps> = ({
  task,
  eventContent,
}) => {
  const {
    activeTimer,
    stopTimerClickHandler,
    stopTimerLoading,
  } = useActiveTimer()

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
    return (
      <CalendarEventStyled>
        <b>{eventContent.timeText}</b>
        <i>
          <UikitUserLink
            user={task?.CreatedBy}
            size={UikitUserLinkAvatarSize.small}
            showName={false}
          />
          <Link href={eventContent.event.url}>
            <a>
              {eventContent.event.title}{' '}
              {task?.status ? `(${task.status})` : null}
            </a>
          </Link>{' '}
          {timer}
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
  }, [
    eventContent.event.title,
    eventContent.event.url,
    eventContent.timeText,
    task?.CreatedBy,
    task.TaskProjects,
    task.status,
    timer,
  ])
}

export default CalendarEvent
