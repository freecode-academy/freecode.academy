import {
  TaskNoNestingFragment,
  UpdateTaskProcessorMutationOptions,
} from 'src/modules/gql/generated'

export type UpdateTaskFormProps = {
  task: TaskNoNestingFragment
  options: UpdateTaskProcessorMutationOptions & {
    variables: NonNullable<UpdateTaskProcessorMutationOptions['variables']>
  }
  onCancel?: () => void
}
