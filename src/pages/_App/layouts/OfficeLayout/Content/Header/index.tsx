/* eslint-disable no-console */
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useStopTimer from 'src/pages/Tasks/View/Task/TaskButtons/hooks/useStopTimer'
import OfficeContext from '../../Context'
import { OfficeLayoutHeaderStyled } from './styles'
import TimerButton from './TimerButton'

const OfficeLayoutHeader: React.FC = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(window.document.title)
  }, [])

  const context = useContext(OfficeContext)

  const activeTimer = useMemo(() => {
    return context?.user?.Timers?.find((n) => n.stopedAt === null)
  }, [context?.user?.Timers])

  console.log('activeTimer', activeTimer)

  const stopTimer = useStopTimer()

  /**
   * При клике мы останавливаем или запускаем таймер
   */
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      /**
       * Если есть активный таймер, завершаем его работу
       */
      if (activeTimer) {
        //
        stopTimer(event)
      }
    },
    [activeTimer, stopTimer]
  )

  /**
   * Если есть активный таймер, выводим его.
   * Если нет, то кнопку запуска последней задачи, если есть
   */
  const timer = useMemo(() => {
    if (activeTimer) {
      /**
       * Пытаемся найти проект по задаче
       */

      return (
        <div className="header--activeTimer">
          <div className="task">{activeTimer.Task.name}</div>
          <TimerButton
            status="play"
            onClick={onClick}
            timerId={activeTimer.id}
          />
        </div>
      )
    }

    return <></>
  }, [activeTimer, onClick])

  return useMemo(() => {
    return (
      <>
        <OfficeLayoutHeaderStyled>
          <div className="header--title">{title}</div>
          <div className="header--timer">{timer}</div>
        </OfficeLayoutHeaderStyled>
      </>
    )
  }, [title, timer])
}

export default OfficeLayoutHeader
