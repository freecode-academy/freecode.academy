/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeCompletionNoNestingFragment } from './codeChallengeCompletionNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { CodeChallengeCompletionNoNestingFragmentDoc } from './codeChallengeCompletionNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type CodeChallengeCompletionFragment = (
  { __typename?: 'CodeChallengeCompletion', Task?: Types.Maybe<{ __typename?: 'Task', id: string, status: Types.TaskStatus }>, CodeChallenge?: Types.Maybe<{ __typename?: 'CodeChallenge', id: string }>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> }
  & CodeChallengeCompletionNoNestingFragment
);

export const CodeChallengeCompletionFragmentDoc = gql`
    fragment codeChallengeCompletion_ on CodeChallengeCompletion {
  ...codeChallengeCompletionNoNesting
  Task {
    id
    status
  }
  CodeChallenge {
    id
  }
  CreatedBy {
    ...UserNoNesting
  }
}
    ${CodeChallengeCompletionNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;