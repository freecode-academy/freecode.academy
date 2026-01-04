import { PaginationProps } from 'src/components/Pagination'
import { TasksConnectionTaskFragment } from 'src/gql/generated'

export interface TasksViewProps extends PaginationProps {
  objects: TasksConnectionTaskFragment[]
}
