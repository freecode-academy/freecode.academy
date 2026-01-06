import React, { useContext, useMemo } from 'react'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import IconButton from 'material-ui/IconButton'
import StartIcon from 'material-ui-icons/PlayArrow'
import { TaskButtonsProps } from './interfaces'
import useStartTimer from './hooks/useStartTimer'

const TaskButtons: React.FC<TaskButtonsProps> = ({ object }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  const {
    mutation: onClickCreateTimer,
    snakbar: createMutationSnakbar,
    loading,
  } = useStartTimer({
    taskId: object.id,
  })

  return useMemo(() => {
    if (!object) {
      return null
    }

    const { id: taskId, Timers } = object
    const { user: currentUser } = context

    const activeTimers = Timers ? Timers.filter((n) => n.stopedAt === null) : []
    const hasActiveTimer =
      currentUser &&
      activeTimers.some((n) => n.CreatedBy?.id === currentUser.id)

    if (hasActiveTimer) {
      return null
    }

    return (
      <>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
            whiteSpace: 'nowrap',
          }}
        >
          <IconButton
            value={taskId}
            onClick={onClickCreateTimer}
            disabled={loading}
            title="Start task"
          >
            <StartIcon />
          </IconButton>
          <span style={{ fontSize: 14, color: '#6b7280' }}>Start task</span>
        </span>
        {createMutationSnakbar}
      </>
    )
  }, [context, createMutationSnakbar, loading, object, onClickCreateTimer])
}

export default TaskButtons
