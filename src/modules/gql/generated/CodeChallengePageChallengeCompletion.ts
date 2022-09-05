/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeCompletionNoNestingFragment } from './codeChallengeCompletionNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { CodeChallengeCompletionNoNestingFragmentDoc } from './codeChallengeCompletionNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type CodeChallengePageChallengeCompletionFragment = (
  { __typename?: 'CodeChallengeCompletion', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> }
  & CodeChallengeCompletionNoNestingFragment
);

export const CodeChallengePageChallengeCompletionFragmentDoc = gql`
    fragment CodeChallengePageChallengeCompletion on CodeChallengeCompletion {
  ...codeChallengeCompletionNoNesting
  CreatedBy {
    ...UserNoNesting
  }
}
    ${CodeChallengeCompletionNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;