/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserTechnologyNoNestingFragment = { __typename?: 'UserTechnology', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, components?: Types.Maybe<any>, date_from?: Types.Maybe<globalThis.Date>, date_till?: Types.Maybe<globalThis.Date>, status?: Types.Maybe<Types.UserTechnologyStatus>, hiring_status?: Types.Maybe<Types.UserTechnologyHiringStatus>, level?: Types.Maybe<1 | 2 | 3 | 4 | 5>, technologyId: string };

export const UserTechnologyNoNestingFragmentDoc = gql`
    fragment UserTechnologyNoNesting on UserTechnology {
  id
  createdAt
  updatedAt
  components
  date_from
  date_till
  status
  hiring_status
  level
  technologyId
}
    `;