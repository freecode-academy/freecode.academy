import React, { useContext, useEffect, useMemo, useState } from 'react'
import useActiveTimer from 'src/hooks/useActiveTimer'
import OfficeContext from '../../Context'
import StartTimerButton from './StartTimerButton'
import { OfficeLayoutHeaderStyled } from './styles'
import TimerButton from './TimerButton'

const OfficeLayoutHeader: React.FC = () => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(window.document.title)

    const titleNode = window.document.querySelector('head title')

    if (!titleNode) {
      return
    }

    const config: MutationObserverInit = {
      childList: true,
    }

    /**
     * Слушаем изменения титла страницы
     */
    const mutationObserver = new MutationObserver((_changes, _observer) => {
      titleNode.textContent && setTitle(titleNode.textContent)
    })

    mutationObserver.observe(titleNode, config)

    return () => {
      mutationObserver.disconnect()
    }
  }, [])

  const context = useContext(OfficeContext)

  const { activeTimer, stopTimerClickHandler, stopTimerLoading } =
    useActiveTimer()

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
            onClick={stopTimerClickHandler}
            timerId={activeTimer.id}
            title="Остановить таймер"
            disabled={stopTimerLoading}
          />
        </div>
      )
    }
    /**
     * Иначе пытаемся получить крайнюю задачу
     */
    const latestTask = context?.tasks[0]

    if (latestTask) {
      return (
        <StartTimerButton task={latestTask} />
        // <TimerButton
        //   status="pause"
        //   onClick={startTimer}
        //   timerId={undefined}
        //   title={`Приступить к выполнению "${latestTask.name}"`}
        // />
      )
    }

    return <></>
  }, [activeTimer, context?.tasks, stopTimerClickHandler, stopTimerLoading])

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
