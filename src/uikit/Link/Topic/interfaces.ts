import { Maybe, Resource } from 'src/modules/gql/generated'

export interface TopicLinkProps {
  object?: {
    __typename?: 'Resource'
    id: string
    name?: Resource['name']
    longtitle?: Maybe<string>
    uri: string
  }
}
