/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserLearnStrategyNoNestingFragment } from './UserLearnStrategyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { LearnStrategyNoNestingFragment } from './LearnStrategyNoNesting';
import { gql } from '@apollo/client';
import { UserLearnStrategyNoNestingFragmentDoc } from './UserLearnStrategyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { LearnStrategyNoNestingFragmentDoc } from './LearnStrategyNoNesting';
export type UserLearnStrategyFragment = (
  { __typename?: 'UserLearnStrategy', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, LearnStrategy?: Types.Maybe<(
    { __typename?: 'LearnStrategy' }
    & LearnStrategyNoNestingFragment
  )> }
  & UserLearnStrategyNoNestingFragment
);

export const UserLearnStrategyFragmentDoc = gql`
    fragment UserLearnStrategy_ on UserLearnStrategy {
  ...UserLearnStrategyNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  LearnStrategy {
    ...LearnStrategyNoNesting
  }
}
    ${UserLearnStrategyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${LearnStrategyNoNestingFragmentDoc}`;