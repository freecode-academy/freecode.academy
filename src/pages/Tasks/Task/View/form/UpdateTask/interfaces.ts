import {
  TaskNoNestingFragment,
  UpdateTaskProcessorMutationOptions,
} from 'src/modules/gql/generated'
import { TaskFormProps } from '../TaskForm/interfaces'

export type UpdateTaskFormProps = {
  task: TaskNoNestingFragment
  options: UpdateTaskProcessorMutationOptions & {
    variables: NonNullable<UpdateTaskProcessorMutationOptions['variables']>
  }
  cancel: TaskFormProps['cancel']
  onSuccess?: () => void
}
