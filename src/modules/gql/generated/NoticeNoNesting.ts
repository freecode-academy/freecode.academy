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
export type NoticeNoNestingFragment = { __typename?: 'Notice', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, type: Types.NoticeType };

export const NoticeNoNestingFragmentDoc = gql`
    fragment NoticeNoNesting on Notice {
  id
  createdAt
  updatedAt
  type
}
    `;