/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { TechnologyUserTechnologyFragment } from './technology_UserTechnology';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TechnologyUserTechnologyFragmentDoc } from './technology_UserTechnology';
export type TechnologyFragment = (
  { __typename?: 'Technology', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology' }
    & TechnologyUserTechnologyFragment
  )>> }
  & TechnologyNoNestingFragment
);

export const TechnologyFragmentDoc = gql`
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
${TechnologyUserTechnologyFragmentDoc}`;