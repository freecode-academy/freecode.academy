import { PrismaCmsContext } from '@prisma-cms/context'
import { TaskTaskTechnology_Fragment } from 'src/modules/gql/generated'

export type TaskTechnologyRowProps = {
  object: TaskTaskTechnology_Fragment

  user: PrismaCmsContext['user']
}
