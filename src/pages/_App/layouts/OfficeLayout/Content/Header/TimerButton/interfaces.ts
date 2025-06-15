import { Scalars } from 'src/gql/generated'

export type TimerButtonStyledProps = React.PropsWithChildren<{
  status: 'play' | 'pause'
}>

export type TimerButtonProps = TimerButtonStyledProps & {
  /**
   * Обработчик по клику
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>

  /**
   * ID таймера. Нужен для корректной отработки останова таймера.
   */
  timerId: Scalars['ID']['input'] | undefined

  title: string

  disabled: boolean
}
