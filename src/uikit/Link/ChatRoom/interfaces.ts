export interface ChatRoomLinkProps extends React.PropsWithChildren {
  object: {
    __typename?: 'ChatRoom'
    id: string
    name?: string
  }
}
