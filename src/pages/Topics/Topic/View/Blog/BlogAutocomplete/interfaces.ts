import {
  ResourceOrderByWithRelationInput,
  ResourceWhereInput,
  TopicCreateInput,
} from 'src/gql/generated'

export type BlogAutocompleteProps = {
  value: string

  where: ResourceWhereInput

  orderBy: ResourceOrderByWithRelationInput

  updateObject: (data: Partial<TopicCreateInput>) => void

  // setFilters?: Function
  // getFilters?: Function
}
