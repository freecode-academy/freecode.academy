import { PrismaCmsContext } from '@prisma-cms/context'
import { TaskTaskTechnologiesFragment } from 'src/modules/gql/generated'

export type TaskTaskTechnologiesProps = {
  object: TaskTaskTechnologiesFragment

  user: PrismaCmsContext['user']

  inEditMode: boolean
}
