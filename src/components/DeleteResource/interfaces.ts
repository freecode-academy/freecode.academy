import { Scalars } from 'src/modules/gql/generated'

export type DeleteResourceProps = {
  resource: {
    __typename?: 'Resource'
    id?: Scalars['ID']
  }
}
