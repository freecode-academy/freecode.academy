import { PrismaCmsContext } from '@prisma-cms/context'
import { TechnologyViewProps } from '../interfaces'

export type ConnectUserTechnologyProps = {
  technology: TechnologyViewProps['object']

  user: PrismaCmsContext['user']
}
