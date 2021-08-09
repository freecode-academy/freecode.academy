import { useMemo, useCallback } from 'react'

import {
  Scalars,
  useCreateTimerProcessorMutation,
} from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'

type useStartTimerProps = {
  /**
   * ID задачи
   */
  taskId: Scalars['ID']
}

/**
 * Запуск таймера
 */
const useStartTimer = ({ taskId }: useStartTimerProps) => {
  const mutationTuple = useCreateTimerProcessorMutation()

  const {
    mutation: createMutation,
    snakbar,
    loading,
  } = useProcessorMutation(mutationTuple)

  const mutation = useCallback(() => {
    createMutation({
      variables: {
        data: {
          Task: {
            connect: {
              id: taskId,
            },
          },
        },
      },
    })
    // .then((r) => {

    //   if(!(r instanceof Error)) {
    //     r?.data?.response
    //   }

    //   return r;
    // })
  }, [createMutation, taskId])

  return useMemo(() => {
    return {
      mutation,
      snakbar,
      loading,
    }
  }, [loading, mutation, snakbar])
}

export default useStartTimer
