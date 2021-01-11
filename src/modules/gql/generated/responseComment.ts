/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ResponseCommentFragment = { __typename?: 'Resource', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>> };

export const ResponseCommentFragmentDoc = gql`
    fragment responseComment on Resource {
  id
  createdAt
  updatedAt
  content
}
    `;