import React, { useMemo, useCallback } from 'react'
import useStartTimer from 'src/pages/Tasks/View/Task/TaskButtons/hooks/useStartTimer'
import TimerButton from '../TimerButton'
import { StartTimerButtonProps } from './interfaces'

/**
 * Кнопка запуска таймера по задаче
 */
const StartTimerButton: React.FC<StartTimerButtonProps> = ({ task }) => {
  const {
    mutation: startTimer,
    snakbar,
    loading,
  } = useStartTimer({
    taskId: task.id,
  })

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()

      return startTimer()
    },
    [startTimer]
  )

  return useMemo(() => {
    return (
      <>
        {snakbar}
        <TimerButton
          status="pause"
          onClick={onClick}
          timerId={undefined}
          title={`Приступить к выполнению "${task.name}"`}
          disabled={loading}
        />
      </>
    )
  }, [loading, onClick, snakbar, task.name])
}

export default StartTimerButton
