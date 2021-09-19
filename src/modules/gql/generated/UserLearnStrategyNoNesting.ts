/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserLearnStrategyNoNestingFragment = { __typename?: 'UserLearnStrategy', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, createdById?: Types.Maybe<string>, learnStrategyId?: Types.Maybe<string> };

export const UserLearnStrategyNoNestingFragmentDoc = gql`
    fragment UserLearnStrategyNoNesting on UserLearnStrategy {
  id
  createdAt
  updatedAt
  createdById
  learnStrategyId
}
    `;