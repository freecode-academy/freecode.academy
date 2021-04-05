import { PaginationProps } from 'src/components/Pagination'
import { NoticeViewProps } from './Notice/interfaces'

export type NoticesViewProps = {
  notices: NoticeViewProps['notice'][]

  pagination: PaginationProps
}
