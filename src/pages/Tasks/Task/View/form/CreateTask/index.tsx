import React, { useCallback, useMemo, useState } from 'react'
import Button from 'material-ui/Button/Button'
import { CreateTaskFormProps } from './interfaces'

import { useCreateTaskProcessorMutation } from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { useRouter } from 'next/router'
import TaskForm from '../TaskForm'

/**
 * Форма создания задачи
 */
const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ options }) => {
  const router = useRouter()

  const [opened, setOpened] = useState(false)

  const toggleOpened = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  const [
    createTaskProcessor,
    createTaskProcessorResult,
  ] = useCreateTaskProcessorMutation({
    onCompleted: (data) => {
      if (data.response.success && data.response.data?.id) {
        // resetForm()
        router.push(`/tasks/${data.response.data?.id}`)
      }
    },
  })

  const mutationState = useProcessorMutation({
    processor: createTaskProcessor,
    loading: createTaskProcessorResult.loading,
  })

  const form = useMemo(() => {
    if (!opened) {
      return null
    }

    return (
      <TaskForm variables={options.variables} mutationState={mutationState} />
    )
  }, [opened, options.variables, mutationState])

  return useMemo(() => {
    return (
      <>
        <div>
          <Button onClick={toggleOpened} variant="raised" size="small">
            {opened ? 'Закрыть форму' : 'Добавить задачу'}
          </Button>
        </div>

        {form}
      </>
    )
  }, [form, opened, toggleOpened])
}

export default CreateTaskForm
