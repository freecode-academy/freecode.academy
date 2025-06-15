import { Maybe, Resource } from 'src/gql/generated'

export interface TopicLinkProps {
  object?: {
    __typename?: 'Resource'
    id: string
    name?: Resource['name']
    longtitle?: Maybe<string>
    uri: string
  }
}
