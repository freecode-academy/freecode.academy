/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { TechnologyUserTechnologyFragment } from './technology_UserTechnology';
import { LearnStrategyStageNoNestingFragment } from './learnStrategyStageNoNesting';
import { LearnStrategyNoNestingFragment } from './LearnStrategyNoNesting';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TechnologyUserTechnologyFragmentDoc } from './technology_UserTechnology';
import { LearnStrategyStageNoNestingFragmentDoc } from './learnStrategyStageNoNesting';
import { LearnStrategyNoNestingFragmentDoc } from './LearnStrategyNoNesting';
export type TechnologyFragment = (
  { __typename?: 'Technology', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology' }
    & TechnologyUserTechnologyFragment
  )>>, LearnStrategyStages?: Types.Maybe<Array<(
    { __typename?: 'LearnStrategyStage', LearnStrategy?: Types.Maybe<(
      { __typename?: 'LearnStrategy' }
      & LearnStrategyNoNestingFragment
    )> }
    & LearnStrategyStageNoNestingFragment
  )>> }
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
    ...learnStrategyStageNoNesting
    LearnStrategy {
      ...LearnStrategyNoNesting
    }
  }
}
    ${TechnologyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${TechnologyUserTechnologyFragmentDoc}
${LearnStrategyStageNoNestingFragmentDoc}
${LearnStrategyNoNestingFragmentDoc}`;