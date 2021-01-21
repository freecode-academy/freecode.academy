/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserTechnologyNoNestingFragment } from './UserTechnologyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserTechnologyNoNestingFragmentDoc } from './UserTechnologyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type Technology_UserTechnologyFragment = (
  { __typename?: 'UserTechnology', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> }
  & UserTechnologyNoNestingFragment
);

export const Technology_UserTechnologyFragmentDoc = gql`
    fragment technology_UserTechnology on UserTechnology {
  ...UserTechnologyNoNesting
  CreatedBy {
    ...UserNoNesting
  }
}
    ${UserTechnologyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;