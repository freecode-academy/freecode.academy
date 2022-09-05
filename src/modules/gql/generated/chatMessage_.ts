/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ChatMessageNoNestingFragment } from './ChatMessageNoNesting';
import { ChatRoomNoNestingFragment } from './ChatRoomNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { ChatMessageNoNestingFragmentDoc } from './ChatMessageNoNesting';
import { ChatRoomNoNestingFragmentDoc } from './ChatRoomNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type ChatMessageFragment = (
  { __typename?: 'ChatMessage', Room?: Types.Maybe<(
    { __typename?: 'ChatRoom' }
    & ChatRoomNoNestingFragment
  )>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> }
  & ChatMessageNoNestingFragment
);

export const ChatMessageFragmentDoc = gql`
    fragment chatMessage_ on ChatMessage {
  ...ChatMessageNoNesting
  Room {
    ...ChatRoomNoNesting
  }
  CreatedBy {
    ...UserNoNesting
  }
}
    ${ChatMessageNoNestingFragmentDoc}
${ChatRoomNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;