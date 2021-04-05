import React, { useMemo } from 'react'
import { Pagination } from 'src/components/Pagination'
import { NoticesViewProps } from './interfaces'
import NoticeView from './Notice'
import { NoticesViewStyled } from './styles'

const NoticesView: React.FC<NoticesViewProps> = ({
  notices,
  pagination,
  ...other
}) => {
  return useMemo(() => {
    return (
      <NoticesViewStyled {...other}>
        {notices.map((n) => {
          return <NoticeView key={n.id} notice={n} />
        })}

        <Pagination {...pagination} />
      </NoticesViewStyled>
    )
  }, [notices, other, pagination])
}

export default NoticesView
