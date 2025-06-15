import { ChatMessageFragment } from 'src/gql/generated'

export interface ChatMessageViewProps {
  object: ChatMessageFragment | null | undefined
}
