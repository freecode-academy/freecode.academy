import React, { useCallback, useContext, useMemo } from 'react'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import IconButton from 'material-ui/IconButton'
import StartIcon from 'material-ui-icons/PlayArrow'
import StopIcon from 'material-ui-icons/Stop'
import { useUpdateTimerProcessorMutation } from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { TaskButtonsProps } from './interfaces'
import useStartTimer from './hooks/useStartTimer'

const TaskButtons: React.FC<TaskButtonsProps> = ({ object }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  /**
   * Обновление таймера
   */
  const updateTimerMutationTuple = useUpdateTimerProcessorMutation()

  const {
    mutation: onClickCreateTimer,
    snakbar: createMutationSnakbar,
    loading: createLoading,
  } = useStartTimer({
    taskId: object.id,
  })

  const {
    mutation: updateMutation,
    snakbar: updateMutationSnakbar,
    loading: updateLoading,
  } = useProcessorMutation(updateTimerMutationTuple)

  const loading = createLoading || updateLoading

  const onClickUpdateTimer = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const timerId = event.currentTarget.value

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
    const buttons: JSX.Element[] = []

    if (object) {
      const { id: taskId, Timers } = object

      const { user: currentUser } = context

      const activeTimers = Timers
        ? Timers.filter((n) => n.stopedAt === null)
        : []

      const activeTimer =
        currentUser &&
        activeTimers.find((n) => n.CreatedBy?.id === currentUser.id)

      if (activeTimer) {
        const { id: timerId } = activeTimer

        buttons.push(
          <IconButton
            key="stop"
            value={timerId}
            onClick={onClickUpdateTimer}
            disabled={loading}
          >
            <StopIcon />
          </IconButton>
        )
      } else {
        buttons.push(
          <IconButton
            key="start"
            value={taskId}
            onClick={onClickCreateTimer}
            disabled={loading}
          >
            <StartIcon />
          </IconButton>
        )
      }
    }

    return (
      <>
        {buttons}

        {createMutationSnakbar}
        {updateMutationSnakbar}
      </>
    )
  }, [
    context,
    createMutationSnakbar,
    loading,
    object,
    onClickCreateTimer,
    onClickUpdateTimer,
    updateMutationSnakbar,
  ])
}

export default TaskButtons
