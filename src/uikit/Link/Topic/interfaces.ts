import { Maybe, Resource } from 'src/gql/generated'

export interface TopicLinkProps extends React.PropsWithChildren {
  object?: {
    __typename?: 'Resource'
    id: string
    name?: Resource['name']
    longtitle?: Maybe<string>
    uri: string
  }
}
