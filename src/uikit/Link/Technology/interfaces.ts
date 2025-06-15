import { Maybe } from 'src/gql/generated'

export interface TechnologyLinkProps {
  object: Maybe<{
    __typename?: 'Technology'
    id?: string | undefined
    name?: string | null | undefined
  }>
}
