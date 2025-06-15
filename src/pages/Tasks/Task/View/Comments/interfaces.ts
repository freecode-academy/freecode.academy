import { TaskQuery } from 'src/gql/generated'

export interface TaskCommentsProps {
  task: NonNullable<TaskQuery['object']>
}
