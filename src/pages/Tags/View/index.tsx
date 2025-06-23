import React from 'react'
import { TagFragment, TagsConnectionQueryVariables } from 'src/gql/generated'

type TagsViewProps = {
  objects: TagFragment[]
  loading: boolean
  count: number
  page?: number
  variables?: TagsConnectionQueryVariables
}

export const TagsView: React.FC<TagsViewProps> = () => {
  return <>TagsView</>
}
