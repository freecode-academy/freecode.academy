import React, { useMemo } from 'react'
import { TimerButtonProps } from './interfaces'
import { TimerButtonStyled } from './styles'

/**
 * Кнопка запуска/останова таймера
 */
const TimerButton: React.FC<TimerButtonProps> = ({
  status,
  timerId,
  onClick,
  ...other
}) => {
  return useMemo(() => {
    return (
      <TimerButtonStyled
        status={status}
        onClick={onClick}
        value={timerId}
        {...other}
      >
        {status === 'pause' ? '▶' : '⏸'}
      </TimerButtonStyled>
    )
  }, [onClick, other, status, timerId])
}

export default TimerButton
