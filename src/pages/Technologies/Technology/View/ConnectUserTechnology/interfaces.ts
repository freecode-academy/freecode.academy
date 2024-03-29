import { PrismaCmsContext } from '@prisma-cms/context'
import { TechnologyViewProps } from '../interfaces'

export type ConnectUserTechnologyProps = {
  technology: TechnologyViewProps['technology']

  currentUser: PrismaCmsContext['user']
}
