import { Maybe, Resource } from 'src/gql/generated'

export function makeTopicLink(resource: {
  __typename?: 'Resource'
  id: string
  name?: Resource['name']
  longtitle?: Maybe<string>
  uri: string
}) {
  const { uri } = resource

  return uri
}
