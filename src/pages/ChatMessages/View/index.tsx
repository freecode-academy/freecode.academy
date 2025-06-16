import React from 'react'
import Pagination from 'src/components/Pagination'
import UiChatMessageOld from 'src/uikit/Chat/ChatMessageOld'
import { ChatMessageOldsPageViewProps } from './interfaces'
import { ChatMessageOldsPageViewStyled } from './styles'

const ChatMessageOldsPageView: React.FC<ChatMessageOldsPageViewProps> = (
  props
) => {
  const { objects, limit, page, total } = props

  return (
    <ChatMessageOldsPageViewStyled>
      {objects.map((n) => {
        return <UiChatMessageOld key={n.id} object={n} />
      })}

      <Pagination limit={limit} page={page} total={total} />
    </ChatMessageOldsPageViewStyled>
  )
}

export default ChatMessageOldsPageView
