import React, { useMemo } from 'react'
import { CreateTaskFormProps } from './interfaces'

import { useCreateTaskProcessorMutation } from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import TaskForm from '../TaskForm'

/**
 * Форма создания задачи
 */
const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  options,
  onSuccess,
  opened,
  cancel,
}) => {
  // const [opened, setOpened] = useState(false)

  // const toggleOpened = useCallback(() => {
  //   setOpened(!opened)
  // }, [opened])

  const mutationTuple = useCreateTaskProcessorMutation({
    onCompleted: (data) => {
      if (data.response.success && data.response.data?.id) {
        // resetForm()

        if (onSuccess) {
          onSuccess(data)
        }
      }
    },
  })

  // TODO Fix types
  const mutationState = (useProcessorMutation(
    mutationTuple
  ) as unknown) as ReturnType<typeof useProcessorMutation>

  const form = useMemo(() => {
    if (!opened) {
      return null
    }

    return (
      <TaskForm
        variables={options.variables}
        mutationState={mutationState}
        cancel={cancel}
      />
    )
  }, [opened, options.variables, mutationState, cancel])

  return useMemo(() => {
    return (
      <>
        {/* <div>
          <Button onClick={toggleOpened} variant="raised" size="small">
            {opened ? 'Закрыть форму' : 'Добавить задачу'}
          </Button>
        </div> */}

        {form}
      </>
    )
  }, [form])
}

export default CreateTaskForm
