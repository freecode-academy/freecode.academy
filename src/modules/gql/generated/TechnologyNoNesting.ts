/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type TechnologyNoNestingFragment = { __typename?: 'Technology', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name?: Types.Maybe<string>, components?: Types.Maybe<any>, site_url?: Types.Maybe<string> };

export const TechnologyNoNestingFragmentDoc = gql`
    fragment TechnologyNoNesting on Technology {
  id
  createdAt
  updatedAt
  name
  components
  site_url
}
    `;