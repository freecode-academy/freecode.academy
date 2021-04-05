/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { NoticeNoNestingFragment } from './NoticeNoNesting';
import { ChatMessageNoNestingFragment } from './ChatMessageNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { ChatRoomNoNestingFragment } from './ChatRoomNoNesting';
import { gql } from '@apollo/client';
import { NoticeNoNestingFragmentDoc } from './NoticeNoNesting';
import { ChatMessageNoNestingFragmentDoc } from './ChatMessageNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { ChatRoomNoNestingFragmentDoc } from './ChatRoomNoNesting';
export type NoticeFragment = (
  { __typename?: 'Notice', ChatMessage?: Types.Maybe<(
    { __typename?: 'ChatMessage', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )>, Room?: Types.Maybe<(
      { __typename?: 'ChatRoom' }
      & ChatRoomNoNestingFragment
    )> }
    & ChatMessageNoNestingFragment
  )>, ChatRoomInvitation?: Types.Maybe<{ __typename?: 'ChatRoomInvitation', id: string, createdAt: globalThis.Date, CreatedBy: (
      { __typename?: 'User' }
      & UserNoNestingFragment
    ), ChatRoom: (
      { __typename?: 'ChatRoom' }
      & ChatRoomNoNestingFragment
    ) }>, User: (
    { __typename?: 'User' }
    & UserNoNestingFragment
  ), CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> }
  & NoticeNoNestingFragment
);

export const NoticeFragmentDoc = gql`
    fragment notice on Notice {
  ...NoticeNoNesting
  ChatMessage {
    ...ChatMessageNoNesting
    CreatedBy {
      ...UserNoNesting
    }
    Room {
      ...ChatRoomNoNesting
    }
  }
  ChatRoomInvitation {
    id
    createdAt
    CreatedBy {
      ...UserNoNesting
    }
    ChatRoom {
      ...ChatRoomNoNesting
    }
  }
  User {
    ...UserNoNesting
  }
  CreatedBy {
    ...UserNoNesting
  }
}
    ${NoticeNoNestingFragmentDoc}
${ChatMessageNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${ChatRoomNoNestingFragmentDoc}`;