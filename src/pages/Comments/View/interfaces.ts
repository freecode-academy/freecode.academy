import { PaginationProps } from 'src/components/Pagination'
import { CommentsConnectionCommentFragment } from 'src/gql/generated'

export type CommentsViewProps = {
  objects: CommentsConnectionCommentFragment[]
} & PaginationProps
