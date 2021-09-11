/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { LearnStrategyNoNestingFragment } from './LearnStrategyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { LearnStrategyStageTechnologyFragment } from './learnStrategyStageTechnology';
import { LearnStrategyStageNoNestingFragment } from './learnStrategyStageNoNesting';
import { UserLearnStrategyNoNestingFragment } from './UserLearnStrategyNoNesting';
import { gql } from '@apollo/client';
import { LearnStrategyNoNestingFragmentDoc } from './LearnStrategyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { LearnStrategyStageTechnologyFragmentDoc } from './learnStrategyStageTechnology';
import { LearnStrategyStageNoNestingFragmentDoc } from './learnStrategyStageNoNesting';
import { UserLearnStrategyNoNestingFragmentDoc } from './UserLearnStrategyNoNesting';
export type LearnStrategyFragment = (
  { __typename?: 'LearnStrategy', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, LearnStrategyStages?: Types.Maybe<Array<(
    { __typename?: 'LearnStrategyStage', Technology?: Types.Maybe<(
      { __typename?: 'Technology' }
      & LearnStrategyStageTechnologyFragment
    )> }
    & LearnStrategyStageNoNestingFragment
  )>>, UserLearnStrategies?: Types.Maybe<Array<(
    { __typename?: 'UserLearnStrategy', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }
    & UserLearnStrategyNoNestingFragment
  )>> }
  & LearnStrategyNoNestingFragment
);

export const LearnStrategyFragmentDoc = gql`
    fragment learnStrategy_ on LearnStrategy {
  ...LearnStrategyNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  LearnStrategyStages {
    Technology {
      ...learnStrategyStageTechnology
    }
    ...learnStrategyStageNoNesting
  }
  UserLearnStrategies {
    ...UserLearnStrategyNoNesting
    CreatedBy {
      ...UserNoNesting
    }
  }
}
    ${LearnStrategyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${LearnStrategyStageTechnologyFragmentDoc}
${LearnStrategyStageNoNestingFragmentDoc}
${UserLearnStrategyNoNestingFragmentDoc}`;