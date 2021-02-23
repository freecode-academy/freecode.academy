import React, { useMemo } from 'react'
import useStartTimer from 'src/pages/Tasks/View/Task/TaskButtons/hooks/useStartTimer'
import TimerButton from '../TimerButton'
import { StartTimerButtonProps } from './interfaces'

/**
 * Кнопка запуска таймера по задаче
 */
const StartTimerButton: React.FC<StartTimerButtonProps> = ({ task }) => {
  const { mutation: startTimer, snakbar, loading } = useStartTimer({
    taskId: task.id,
  })

  return useMemo(() => {
    return (
      <>
        {snakbar}
        <TimerButton
          status="pause"
          onClick={startTimer}
          timerId={undefined}
          title={`Приступить к выполнению "${task.name}"`}
          disabled={loading}
        />
      </>
    )
  }, [loading, snakbar, startTimer, task.name])
}

export default StartTimerButton
