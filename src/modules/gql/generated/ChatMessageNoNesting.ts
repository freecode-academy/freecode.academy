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
export type ChatMessageNoNestingFragment = { __typename?: 'ChatMessage', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, content?: Types.Maybe<any>, contentText?: Types.Maybe<string> };

export const ChatMessageNoNestingFragmentDoc = gql`
    fragment ChatMessageNoNesting on ChatMessage {
  id
  createdAt
  updatedAt
  content
  contentText
}
    `;