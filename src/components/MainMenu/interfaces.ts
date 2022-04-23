import {
  PrismaCmsComponentProps,
  PrismaCmsComponentState,
} from '@prisma-cms/component'
import { MeQuery } from 'src/modules/gql/generated'

export interface MainMenuProps extends PrismaCmsComponentProps {
  classes?: Record<string, string>

  user: MeQuery['me']
}

export interface MainMenuState extends PrismaCmsComponentState {}
