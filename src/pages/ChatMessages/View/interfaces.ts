import { PaginationProps } from 'src/components/Pagination'
import { ChatMessageFragment } from 'src/gql/generated'

export interface ChatMessagesPageViewProps extends PaginationProps {
  objects: ChatMessageFragment[]
}
