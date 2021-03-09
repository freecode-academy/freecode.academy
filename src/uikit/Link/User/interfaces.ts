import { TypographyProps } from 'material-ui/Typography'
import { Maybe, User } from 'src/modules/gql/generated'
import { UiLinkProps } from '../interfaces'

export type UikitUserLinkObject = {
  __typename?: User['__typename']
  id?: User['id']
  username?: User['username']
  fullname?: User['fullname']
}

export interface UikitUserLinkProps {
  user?: Maybe<UikitUserLinkObject>

  variant?: TypographyProps['variant']

  withAvatar?: boolean

  classes?: UiLinkProps['classes'] & { avatar: string }

  /**
   * Дополнительный контент
   */
  secondary?: any

  showName?: boolean

  size?: 'small' | 'normal'

  avatarProps?: any

  // TODO: заменить на какую-то универсальную сущность типа secondaryText
  /**
   * Должность или позиция в команде
   */
  position?: any

  onClick?: (event?: any) => void

  className?: string
}
