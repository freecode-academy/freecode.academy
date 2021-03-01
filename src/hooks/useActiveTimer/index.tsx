import { useCallback, useContext, useMemo } from 'react'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import useStopTimer from 'src/pages/Tasks/View/Task/TaskButtons/hooks/useStopTimer'

/**
 * Активный таймер текущего пользователя
 */
const useActiveTimer = () => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  const activeTimer = useMemo(() => {
    return context?.user?.Timers?.find((n) => n.stopedAt === null)
  }, [context?.user?.Timers])

  const { mutation: stopTimer, loading } = useStopTimer()

  /**
   * При клике мы останавливаем или запускаем таймер
   */
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()

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

  return useMemo(() => {
    return {
      activeTimer,
      stopTimerClickHandler: onClick,
      stopTimerLoading: loading,
    }
  }, [activeTimer, loading, onClick])
}

export default useActiveTimer
