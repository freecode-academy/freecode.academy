import useProcessorMutation from 'src/hooks/useProcessorMutation'
import {
  CreateTaskProcessorMutationVariables,
  TaskNoNestingFragment,
  UpdateTaskProcessorMutationVariables,
} from 'src/modules/gql/generated'

// export type TaskFormProps = {
//   data?: Task
//   variables:
//     | CreateTaskProcessorMutationVariables
//     | UpdateTaskProcessorMutationVariables

//   mutationState: ReturnType<typeof useProcessorMutation>
// }

export type TaskFormProps = {
  mutationState: ReturnType<typeof useProcessorMutation>

  /**
   * Отмена редактирования
   */
  cancel: () => void
} & (
  | {
      task?: undefined
      variables: CreateTaskProcessorMutationVariables
    }
  | {
      task: TaskNoNestingFragment
      variables: UpdateTaskProcessorMutationVariables
    }
)
