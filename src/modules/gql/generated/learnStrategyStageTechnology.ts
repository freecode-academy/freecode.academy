/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { UserTechnologyNoNestingFragment } from './UserTechnologyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { UserTechnologyNoNestingFragmentDoc } from './UserTechnologyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type LearnStrategyStageTechnologyFragment = (
  { __typename?: 'Technology', UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }
    & UserTechnologyNoNestingFragment
  )>> }
  & TechnologyNoNestingFragment
);

export const LearnStrategyStageTechnologyFragmentDoc = gql`
    fragment learnStrategyStageTechnology on Technology {
  ...TechnologyNoNesting
  UserTechnologies {
    ...UserTechnologyNoNesting
    CreatedBy {
      ...UserNoNesting
    }
  }
}
    ${TechnologyNoNestingFragmentDoc}
${UserTechnologyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;