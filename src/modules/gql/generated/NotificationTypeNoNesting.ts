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
export type NotificationTypeNoNestingFragment = { __typename?: 'NotificationType', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, code?: Types.Maybe<string>, comment?: Types.Maybe<string>, oldID?: Types.Maybe<number> };

export const NotificationTypeNoNestingFragmentDoc = gql`
    fragment NotificationTypeNoNesting on NotificationType {
  id
  createdAt
  updatedAt
  name
  code
  comment
  oldID
}
    `;