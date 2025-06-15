import { PrismaCmsContext } from '@prisma-cms/context'
import { TaskTaskTechnologiesFragment } from 'src/gql/generated'

export type TaskTaskTechnologiesProps = {
  object: TaskTaskTechnologiesFragment

  user: PrismaCmsContext['user']

  inEditMode: boolean
}
