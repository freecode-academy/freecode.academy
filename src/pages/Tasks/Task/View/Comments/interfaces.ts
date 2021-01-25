import { TaskQuery } from 'src/modules/gql/generated'

export interface TaskCommentsProps {
  task: NonNullable<TaskQuery['object']>
}
