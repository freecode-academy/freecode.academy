import { PaginationProps } from 'src/components/Pagination'
import { UsersConnectionUserFragment } from 'src/gql/generated'

export type UsersViewProps = {
  users: UsersConnectionUserFragment[]
  pagination: PaginationProps
}
