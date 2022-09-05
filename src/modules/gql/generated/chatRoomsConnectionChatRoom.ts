/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ChatRoomNoNestingFragment } from './ChatRoomNoNesting';
import { ChatRoomsConnectionUserFragment } from './chatRoomsConnectionUser';
import { gql } from '@apollo/client';
import { ChatRoomNoNestingFragmentDoc } from './ChatRoomNoNesting';
import { ChatRoomsConnectionUserFragmentDoc } from './chatRoomsConnectionUser';
export type ChatRoomsConnectionChatRoomFragment = (
  { __typename?: 'ChatRoom', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & ChatRoomsConnectionUserFragment
  )>, Members?: Types.Maybe<Array<(
    { __typename?: 'User' }
    & ChatRoomsConnectionUserFragment
  )>>, Invitations?: Types.Maybe<Array<{ __typename?: 'ChatRoomInvitation', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, User?: Types.Maybe<(
      { __typename?: 'User' }
      & ChatRoomsConnectionUserFragment
    )> }>> }
  & ChatRoomNoNestingFragment
);

export const ChatRoomsConnectionChatRoomFragmentDoc = gql`
    fragment chatRoomsConnectionChatRoom on ChatRoom {
  ...ChatRoomNoNesting
  CreatedBy {
    ...chatRoomsConnectionUser
  }
  Members {
    ...chatRoomsConnectionUser
  }
  Invitations {
    id
    createdAt
    updatedAt
    User {
      ...chatRoomsConnectionUser
    }
  }
}
    ${ChatRoomNoNestingFragmentDoc}
${ChatRoomsConnectionUserFragmentDoc}`;