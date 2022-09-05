/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type CommentNoNestingFragment = { __typename?: 'Resource', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, type?: Types.Maybe<Types.ResourceType>, content?: Types.Maybe<any>, components?: Types.Maybe<any>, uri: string };

export const CommentNoNestingFragmentDoc = gql`
    fragment CommentNoNesting on Resource {
  id
  createdAt
  updatedAt
  type
  content
  components
  uri
}
    `;