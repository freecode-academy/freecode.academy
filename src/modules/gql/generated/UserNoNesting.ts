/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserNoNestingFragment = { __typename?: 'User', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, username?: Types.Maybe<string>, email?: Types.Maybe<string>, phone?: Types.Maybe<string>, showEmail?: Types.Maybe<boolean>, showPhone?: Types.Maybe<boolean>, fullname?: Types.Maybe<string>, image?: Types.Maybe<string>, address?: Types.Maybe<string>, sudo?: Types.Maybe<boolean>, active?: Types.Maybe<boolean>, activated?: Types.Maybe<boolean>, deleted?: Types.Maybe<boolean>, hasEmail?: Types.Maybe<boolean>, hasPhone?: Types.Maybe<boolean>, acceptChatMessageAnonymous?: Types.Maybe<boolean>, acceptNewChatRoomAnonymous?: Types.Maybe<boolean>, acceptNewChatRoom?: Types.Maybe<boolean>, technologyLevel?: Types.Maybe<1 | 2 | 3 | 4 | 5>, isMentor?: Types.Maybe<boolean>, telegram?: Types.Maybe<string> };

export const UserNoNestingFragmentDoc = gql`
    fragment UserNoNesting on User {
  id
  createdAt
  updatedAt
  username
  email
  phone
  showEmail
  showPhone
  fullname
  image
  address
  sudo
  active
  activated
  deleted
  hasEmail
  hasPhone
  acceptChatMessageAnonymous
  acceptNewChatRoomAnonymous
  acceptNewChatRoom
  technologyLevel
  isMentor
  telegram
}
    `;