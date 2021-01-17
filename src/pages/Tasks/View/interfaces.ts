import { PaginationProps } from 'src/components/Pagination'
import {
  TasksConnectionTaskFragment,
  // TasksConnectionQueryVariables,
} from 'src/modules/gql/generated'

export interface TasksViewProps extends PaginationProps {
  // createTimerProcessor: (data: any) => Promise<any>
  // updateTimerProcessor: (data: any) => Promise<any>

  // createTaskProcessor: (data: any) => Promise<any>
  // updateTaskProcessor: (data: any) => Promise<any>

  // deleteTaskReaction: (data: any) => Promise<any>

  // classes?: any

  filters?: any

  setFilters?: (filters: any) => void

  // data: TasksConnectionQuery | null
  objects: TasksConnectionTaskFragment[]

  // variables?: TasksConnectionQueryVariables

  // showAll: boolean

  // setShowAll(show: boolean): void
}
