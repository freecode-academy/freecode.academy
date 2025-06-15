import { TaskQuery } from 'src/gql/generated'

export interface TaskViewProps {
  object: NonNullable<TaskQuery['object']>

  loading: boolean
}
