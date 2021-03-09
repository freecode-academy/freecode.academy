import { PrismaCmsContext } from '@prisma-cms/context'
import { TaskTaskTechnologyFragment } from 'src/modules/gql/generated'

export type TaskTechnologyRowProps = {
  object: TaskTaskTechnologyFragment

  user: PrismaCmsContext['user']
}
