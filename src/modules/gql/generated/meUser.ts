/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserFragment } from './user_';
import { MeUserCodeChallengeCompletionFragment } from './MeUserCodeChallengeCompletion';
import { MeUserTimerFragment } from './MeUserTimer';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user_';
import { MeUserCodeChallengeCompletionFragmentDoc } from './MeUserCodeChallengeCompletion';
import { MeUserTimerFragmentDoc } from './MeUserTimer';
export type MeUserFragment = (
  { __typename?: 'User', CodeChallengeCompletions?: Types.Maybe<Array<(
    { __typename?: 'CodeChallengeCompletion' }
    & MeUserCodeChallengeCompletionFragment
  )>>, Timers?: Types.Maybe<Array<(
    { __typename?: 'Timer' }
    & MeUserTimerFragment
  )>> }
  & UserFragment
);

export const MeUserFragmentDoc = gql`
    fragment meUser on User {
  ...user_
  CodeChallengeCompletions {
    ...MeUserCodeChallengeCompletion
  }
  Timers(first: 1, where: {stopedAt: null}) {
    ...MeUserTimer
  }
}
    ${UserFragmentDoc}
${MeUserCodeChallengeCompletionFragmentDoc}
${MeUserTimerFragmentDoc}`;