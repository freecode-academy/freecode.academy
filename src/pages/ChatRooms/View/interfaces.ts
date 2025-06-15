import { ObjectsListViewProps } from 'src/components/view/List/interfaces'
import { ChatRoomsConnectionChatRoomFragment } from 'src/gql/generated'

export interface ChatRoomsViewProps extends ObjectsListViewProps {
  objects: ChatRoomsConnectionChatRoomFragment[]
}
