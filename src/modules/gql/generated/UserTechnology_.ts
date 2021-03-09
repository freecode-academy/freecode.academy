/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { UserTechnologyNoNestingFragment } from './UserTechnologyNoNesting';
import { gql } from '@apollo/client';
import { UserTechnologyNoNestingFragmentDoc } from './UserTechnologyNoNesting';
export type UserTechnologyFragment = (
  { __typename?: 'UserTechnology' }
  & UserTechnologyNoNestingFragment
);

export const UserTechnologyFragmentDoc = gql`
    fragment UserTechnology_ on UserTechnology {
  ...UserTechnologyNoNesting
}
    ${UserTechnologyNoNestingFragmentDoc}`;