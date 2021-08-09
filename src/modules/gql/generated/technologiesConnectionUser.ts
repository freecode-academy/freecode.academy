/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type TechnologiesConnectionUserFragment = (
  { __typename?: 'User' }
  & UserNoNestingFragment
);

export const TechnologiesConnectionUserFragmentDoc = gql`
    fragment technologiesConnectionUser on User {
  ...UserNoNesting
}
    ${UserNoNestingFragmentDoc}`;