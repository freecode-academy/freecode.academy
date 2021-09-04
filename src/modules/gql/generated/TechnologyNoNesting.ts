/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type TechnologyNoNestingFragment = { __typename?: 'Technology', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, description?: Types.Maybe<string>, components?: Types.Maybe<any>, site_url?: Types.Maybe<string>, level1hours?: Types.Maybe<number>, level2hours?: Types.Maybe<number>, level3hours?: Types.Maybe<number>, level4hours?: Types.Maybe<number>, level5hours?: Types.Maybe<number> };

export const TechnologyNoNestingFragmentDoc = gql`
    fragment TechnologyNoNesting on Technology {
  id
  createdAt
  updatedAt
  name
  description
  components
  site_url
  level1hours
  level2hours
  level3hours
  level4hours
  level5hours
}
    `;