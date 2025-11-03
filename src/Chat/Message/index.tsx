import { MarkdownField } from 'src/components/MarkdownField'
import { AiMessageItemStyled } from './styles'
import { ChatMessageFragment, UserFragment } from 'src/gql/generated'

type AiMessageProps = {
  message: ChatMessageFragment
  currentUser: UserFragment | null | undefined
}

export const AiMessageItem: React.FC<AiMessageProps> = ({
  message,
  currentUser,
  ...other
}) => {
  return (
    <AiMessageItemStyled
      direction={
        currentUser && message.createdBy === currentUser.id ? 'out' : 'in'
      }
      {...other}
    >
      <MarkdownField>{message.text}</MarkdownField>
    </AiMessageItemStyled>
  )
}
