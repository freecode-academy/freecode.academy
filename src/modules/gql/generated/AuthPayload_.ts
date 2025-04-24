/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type AuthPayloadFragment = { __typename?: 'AuthPayload', success: boolean, message?: Types.Maybe<string>, token?: Types.Maybe<string>, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> };

export const AuthPayloadFragmentDoc = gql`
    fragment AuthPayload_ on AuthPayload {
  success
  message
  token
  errors {
    key
    message
  }
  data {
    ...UserNoNesting
  }
}
    ${UserNoNestingFragmentDoc}`;