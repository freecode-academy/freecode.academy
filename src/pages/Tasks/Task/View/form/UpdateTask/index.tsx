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
  onSuccess,
  ...other
}) => {
  const mutationTuple = useUpdateTaskProcessorMutation({
    onCompleted: (data) => {
      if (data.response.success) {
        onSuccess && onSuccess()
      }
    },
  })

  // TODO Fix types
  const mutationState = (useProcessorMutation(
    mutationTuple
  ) as unknown) as ReturnType<typeof useProcessorMutation>

  const form = useMemo(() => {
    return (
      <TaskForm
        variables={options.variables}
        task={task}
        // mutationState={{
        //   error: mutationState.error,
        //   mutation: mutationState.mutation,
        // }}
        mutationState={mutationState}
        {...other}
      />
    )
  }, [options.variables, mutationState, task, other])

  return form
}

export default UpdateTaskForm
