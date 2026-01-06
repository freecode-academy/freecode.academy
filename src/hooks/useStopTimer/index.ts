import { useMemo, useCallback } from 'react'
import { Scalars, useUpdateTimerProcessorMutation } from 'src/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'

type UseStopTimerProps = {
  timerId: Scalars['ID']['input']
}

const useStopTimer = ({ timerId }: UseStopTimerProps) => {
  const mutationTuple = useUpdateTimerProcessorMutation()

  const {
    mutation: updateMutation,
    snakbar,
    loading,
  } = useProcessorMutation(mutationTuple)

  const mutation = useCallback(() => {
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
  }, [updateMutation, timerId])

  return useMemo(() => {
    return {
      mutation,
      snakbar,
      loading,
    }
  }, [loading, mutation, snakbar])
}

export default useStopTimer
