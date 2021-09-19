/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type AuthUserFragment = { __typename?: 'User', id: string, username?: Types.Maybe<string>, email?: Types.Maybe<string>, phone?: Types.Maybe<string>, showEmail?: Types.Maybe<boolean>, showPhone?: Types.Maybe<boolean>, sudo?: Types.Maybe<boolean>, hasEmail?: Types.Maybe<boolean>, hasPhone?: Types.Maybe<boolean> };

export const AuthUserFragmentDoc = gql`
    fragment AuthUser on User {
  id
  username
  email
  phone
  showEmail
  showPhone
  sudo
  hasEmail
  hasPhone
}
    `;