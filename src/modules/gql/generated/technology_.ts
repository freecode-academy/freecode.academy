/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


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
  )>>, LearnStrategyStages?: Types.Maybe<Array<{ __typename?: 'LearnStrategyStage', id: string, LearnStrategy?: Types.Maybe<{ __typename?: 'LearnStrategy', id: string, name: string }> }>> }
  & TechnologyNoNestingFragment
);

export const TechnologyFragmentDoc = gql`
    fragment technology_ on Technology {
  ...TechnologyNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  UserTechnologies(orderBy: {createdAt: desc}) {
    ...technology_UserTechnology
  }
  LearnStrategyStages @include(if: $withLearnStrategies) {
    id
    LearnStrategy {
      id
      name
    }
  }
}
    ${TechnologyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${TechnologyUserTechnologyFragmentDoc}`;