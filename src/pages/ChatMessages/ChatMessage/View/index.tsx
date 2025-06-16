import React from 'react'
import { ChatMessageOldViewProps } from './interfaces'
import { ChatMessageOldViewStyled } from './styles'
import UiChatMessageOld from 'src/uikit/Chat/ChatMessageOld'
import Link from 'next/link'

const ChatMessageOldView: React.FC<ChatMessageOldViewProps> = (props) => {
  const chatMessageOld = props.object

  if (!chatMessageOld) {
    return null
  }

  return (
    <ChatMessageOldViewStyled>
      <UiChatMessageOld object={chatMessageOld} />
      <Link href="/chat-messages">
        <a className="chat-message--all-messages-link">Все сообщения</a>
      </Link>
    </ChatMessageOldViewStyled>
  )
}

export default ChatMessageOldView
