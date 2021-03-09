import { PaginationProps } from 'src/components/Pagination'
import { ChatMessageFragment } from 'src/modules/gql/generated'

export interface ChatMessagesPageViewProps extends PaginationProps {
  objects: ChatMessageFragment[]
}
