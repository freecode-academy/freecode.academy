import { PaginationProps } from 'src/components/Pagination'
import { ChatMessageOldFragment } from 'src/gql/generated'

export interface ChatMessageOldsPageViewProps extends PaginationProps {
  objects: ChatMessageOldFragment[]
}
