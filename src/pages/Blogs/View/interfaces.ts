import { ObjectsListViewProps } from 'src/components/view/List/interfaces'
import { BlogsConnectionResourceFragment } from 'src/gql/generated'

export interface BlogsViewProps extends ObjectsListViewProps {
  objects: BlogsConnectionResourceFragment[]
}
