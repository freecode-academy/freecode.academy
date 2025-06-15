import { Scalars } from 'src/gql/generated'

export type DeleteResourceProps = {
  resource: {
    __typename?: 'Resource'
    id?: Scalars['ID']['input']
  }
}
