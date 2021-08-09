/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type TimerNoNestingFragment = { __typename?: 'Timer', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, stopedAt?: Types.Maybe<globalThis.Date> };

export const TimerNoNestingFragmentDoc = gql`
    fragment TimerNoNesting on Timer {
  id
  createdAt
  updatedAt
  stopedAt
}
    `;