import React, { useEffect, useMemo, useState } from 'react'
import useActiveTimer from 'src/hooks/useActiveTimer'
import StartTimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/StartTimerButton'
import TimerButton from 'src/pages/_App/layouts/OfficeLayout/Content/Header/TimerButton'
import moment from 'moment'
import { OfficeProjectPageViewTaskProps } from './interfaces'
import { OfficeProjectPageViewTaskStyled } from './styles'
import Link from 'next/link'

const OfficeProjectPageViewTask: React.FC<OfficeProjectPageViewTaskProps> = ({
  task,
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

  return useMemo(() => {
    return (
      <OfficeProjectPageViewTaskStyled>
        <div>{timer}</div>
        <div className="task">
          <Link href={`/tasks/${task.id}`}>
            <a title={task.name}>{task.name}</a>
          </Link>{' '}
          ({task.status})
        </div>
        <div className="timer">{duration}</div>
      </OfficeProjectPageViewTaskStyled>
    )
  }, [timer, task.id, task.name, task.status, duration])
}

export default OfficeProjectPageViewTask
