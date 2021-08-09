/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type OfficeProjectFragment = { __typename?: 'Project', id: string, name: string, url?: Types.Maybe<string> };

export const OfficeProjectFragmentDoc = gql`
    fragment officeProject on Project {
  id
  name
  url
}
    `;