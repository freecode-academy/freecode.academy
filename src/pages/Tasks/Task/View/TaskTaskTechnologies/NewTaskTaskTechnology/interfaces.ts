import { TaskTechnologyCreateInput } from 'src/modules/gql/generated'
import { PrismaCmsContext } from '@prisma-cms/context'

export type NewTaskTaskTechnologyProps = {
  // data: Omit<TaskTechnologyCreateInput, "Technology">
  data: TaskTechnologyCreateInput
  user: PrismaCmsContext['user']
  updateNewItemData: (
    item: TaskTechnologyCreateInput,
    data: TaskTechnologyCreateInput
  ) => void
  removeNewItemData: (item: TaskTechnologyCreateInput) => void
}
