/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { Technology_UserTechnologyFragment } from './technology_UserTechnology';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { Technology_UserTechnologyFragmentDoc } from './technology_UserTechnology';
export type Technology_Fragment = (
  { __typename?: 'Technology', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology' }
    & Technology_UserTechnologyFragment
  )>> }
  & TechnologyNoNestingFragment
);

export const Technology_FragmentDoc = gql`
    fragment technology_ on Technology {
  ...TechnologyNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  UserTechnologies {
    ...technology_UserTechnology
  }
}
    ${TechnologyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${Technology_UserTechnologyFragmentDoc}`;