import React, { useCallback, useMemo } from 'react'
import { useUpdateTimerProcessorMutation } from 'src/modules/gql/generated'

/**
 * Завершение работы таймера.
 * Передается в кнопку, для которой должно быть задано value={timerId}
 */
const useStopTimer = () => {
  const [updateMutation, { loading }] = useUpdateTimerProcessorMutation()

  const mutation = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const timerId = event.currentTarget.value

      if (!timerId) {
        return
      }

      updateMutation({
        variables: {
          data: {
            stopedAt: new Date(),
          },
          where: {
            id: timerId,
          },
        },
      })
    },
    [updateMutation]
  )

  return useMemo(() => {
    return {
      mutation,
      loading,
    }
  }, [loading, mutation])
}

export default useStopTimer
