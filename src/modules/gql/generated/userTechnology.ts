/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserTechnologyFragment = { __typename?: 'UserTechnology', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, components?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, date_from?: Types.Maybe<globalThis.Date>, date_till?: Types.Maybe<globalThis.Date>, status?: Types.Maybe<Types.UserTechnologyStatus> };

export const UserTechnologyFragmentDoc = gql`
    fragment userTechnology on UserTechnology {
  id
  createdAt
  updatedAt
  components
  date_from
  date_till
  status
}
    `;