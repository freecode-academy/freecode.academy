import { PrismaCmsContext } from '@prisma-cms/context'
import { TaskTaskTechnologyFragment } from 'src/gql/generated'

export type TaskTechnologyRowProps = {
  object: TaskTaskTechnologyFragment

  user: PrismaCmsContext['user']
}
