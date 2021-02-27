import React, { useCallback, useMemo } from 'react'
import {
  TaskStatus,
  useUpdateTaskProcessorMutation,
} from 'src/modules/gql/generated'
import DoneIcon from 'material-ui-icons/Done'
import { IconButton } from 'material-ui'
import { TaskChangeStatusButtonProps } from './interfaces'
import useProcessorMutation from 'src/hooks/useProcessorMutation'

/**
 * Кнопка быстрой смены статуса задачи
 */
const TaskChangeStatusButton: React.FC<TaskChangeStatusButtonProps> = ({
  task,
}) => {
  const { snakbar, loading, mutation } = useProcessorMutation(
    useUpdateTaskProcessorMutation()
  )

  /**
   * Отмечаем задачу выполненной
   */
  const markAsDone = useCallback(() => {
    mutation({
      variables: {
        where: {
          id: task.id,
        },
        data: {
          /**
           * Отмечаем таску выполненной
           */
          status: TaskStatus.COMPLETED,
          /**
           * Останавливаем в ней таймеры, если есть запущенные
           */
          // TODO здесь остановятся даже таймеры других пользователей, если кто-то работает по ней.
          // но это редкий случай и нет смысла сейчас этот момент отлавливать,
          // тем более, что задачу отметить выполненной может только ее владелец.
          Timers: {
            updateMany: [
              {
                where: {
                  stopedAt: null,
                },
                data: {
                  stopedAt: new Date(),
                },
              },
            ],
          },
        },
      },
    })
  }, [mutation, task.id])

  return useMemo(() => {
    if (task.status === TaskStatus.COMPLETED) {
      return null
    }

    return (
      <>
        {snakbar}
        <IconButton
          title="Отметить задачу выполненной"
          disabled={loading}
          onClick={markAsDone}
        >
          <DoneIcon />
        </IconButton>
      </>
    )
  }, [snakbar, task.status, loading, markAsDone])
}

export default TaskChangeStatusButton
