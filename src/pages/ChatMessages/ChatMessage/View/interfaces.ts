import { ChatMessageFragment } from 'src/modules/gql/generated'

export interface ChatMessageViewProps {
  object: ChatMessageFragment | null | undefined
}
