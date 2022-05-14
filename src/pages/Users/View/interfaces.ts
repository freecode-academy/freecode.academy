import { PaginationProps } from 'src/components/Pagination'
import { UsersConnectionUserFragment } from 'src/modules/gql/generated'

export type UsersViewProps = {
  users: UsersConnectionUserFragment[]
  pagination: PaginationProps
}
