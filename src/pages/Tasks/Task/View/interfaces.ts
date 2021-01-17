import { TaskQuery } from 'src/modules/gql/generated'

export interface TaskViewProps {
  object: NonNullable<TaskQuery['object']>

  loading: boolean
}
