import { ObjectsListViewProps } from 'src/components/view/List/interfaces'
import { TagFragment } from 'src/gql/generated'

export interface TagsViewProps extends ObjectsListViewProps {
  // data: Maybe<TagsConnectionQuery>
  objects: TagFragment[]
}
