import {
  CreateTaskProcessorMutation,
  CreateTaskProcessorMutationOptions,
} from 'src/modules/gql/generated'
import { TaskFormProps } from '../TaskForm/interfaces'

export type CreateTaskFormProps = {
  options: CreateTaskProcessorMutationOptions & {
    variables: NonNullable<CreateTaskProcessorMutationOptions['variables']>
  }

  opened: boolean

  /**
   * Кастомный коллбэк на успешное выполнение
   */
  onSuccess: (data: CreateTaskProcessorMutation) => void

  cancel: TaskFormProps['cancel']
}
