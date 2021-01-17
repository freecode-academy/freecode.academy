import { CreateTaskProcessorMutationOptions } from 'src/modules/gql/generated'

export type CreateTaskFormProps = {
  options: CreateTaskProcessorMutationOptions & {
    variables: NonNullable<CreateTaskProcessorMutationOptions['variables']>
  }
}
