import { Scalars } from 'src/modules/gql/generated'

export type TimerButtonStyledProps = {
  status: 'play' | 'pause'
}

export type TimerButtonProps = TimerButtonStyledProps & {
  /**
   * Обработчик по клику
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * ID таймера. Нужен для корректной отработки останова таймера.
   */
  timerId: Scalars['ID'] | undefined

  title: string

  disabled: boolean
}
