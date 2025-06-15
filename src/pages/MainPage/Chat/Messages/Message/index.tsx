import ReactMarkdown from 'react-markdown'
import { ChatMessageFragment } from 'src/gql/generated'
import { ContextValue } from 'src/pages/_App/Context'
import Link from 'src/uikit/Link'
import { ChatMessageContentStyled, ChatMessageStyled } from './styles'

type MainPageChatMessageProps = {
  message: ChatMessageFragment
  currentUser: ContextValue['user']
}

export const MainPageChatMessage: React.FC<MainPageChatMessageProps> = ({
  message,
  currentUser,
  ...other
}) => {
  return (
    <ChatMessageStyled
      isUser={message.CreatedBy?.id === currentUser?.id}
      {...other}
    >
      <ChatMessageContentStyled>
        <ReactMarkdown
          components={{
            a: ({ node: _node, ...props }) => (
              <>
                <Link {...props} />
              </>
            ),
          }}
        >
          {message.contentText}
        </ReactMarkdown>
      </ChatMessageContentStyled>
    </ChatMessageStyled>
  )
}
