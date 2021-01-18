import React, { useMemo } from 'react'
import { UpdateTaskFormProps } from './interfaces'

import { useUpdateTaskProcessorMutation } from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import TaskForm from '../TaskForm'

/**
 * Форма редактирования задачи
 */
const UpdateTaskForm: React.FC<UpdateTaskFormProps> = ({
  options,
  task,
  ...other
}) => {
  const [
    updateTaskProcessor,
    updateTaskProcessorResult,
  ] = useUpdateTaskProcessorMutation({})

  const mutationState = useProcessorMutation({
    processor: updateTaskProcessor,
    loading: updateTaskProcessorResult.loading,
  })

  const form = useMemo(() => {
    return (
      <TaskForm
        variables={options.variables}
        mutationState={mutationState}
        task={task}
        {...other}
      />
    )
  }, [options.variables, mutationState, task, other])

  return form
}

export default UpdateTaskForm
