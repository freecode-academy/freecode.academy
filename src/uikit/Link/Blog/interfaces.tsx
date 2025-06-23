import { Maybe, Resource } from 'src/gql/generated'
import { UiLinkProps } from '../interfaces'

export interface BlogLinkProps extends React.PropsWithChildren {
  object: {
    __typename?: 'Resource'
    id: string
    uri?: string | null
    name?: Resource['name']
    longtitle?: Maybe<string>
  }

  variant?: UiLinkProps['variant']

  classes?: {
    root: string
    text: string
  }

  target?: string
}
