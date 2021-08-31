/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type LearnStrategyNoNestingFragment = { __typename?: 'LearnStrategy', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, description?: Types.Maybe<string>, level: 1 | 2 | 3 | 4 | 5, createdById: string };

export const LearnStrategyNoNestingFragmentDoc = gql`
    fragment LearnStrategyNoNesting on LearnStrategy {
  id
  createdAt
  updatedAt
  name
  description
  level
  createdById
}
    `;