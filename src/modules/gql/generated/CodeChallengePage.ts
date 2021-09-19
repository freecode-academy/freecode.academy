/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeFragment } from './codeChallenge_';
import { CodeChallengeWithBlocksFragment } from './codeChallengeWithBlocks_';
import { CodeChallengePageChallengeCompletionFragment } from './CodeChallengePageChallengeCompletion';
import { gql } from '@apollo/client';
import { CodeChallengeFragmentDoc } from './codeChallenge_';
import { CodeChallengeWithBlocksFragmentDoc } from './codeChallengeWithBlocks_';
import { CodeChallengePageChallengeCompletionFragmentDoc } from './CodeChallengePageChallengeCompletion';
export type CodeChallengePageFragment = (
  { __typename?: 'CodeChallenge', CodeChallengeCompletionsSuccess?: Types.Maybe<Array<(
    { __typename?: 'CodeChallengeCompletion' }
    & CodeChallengePageChallengeCompletionFragment
  )>> }
  & CodeChallengeFragment
  & CodeChallengeWithBlocksFragment
);

export const CodeChallengePageFragmentDoc = gql`
    fragment CodeChallengePage on CodeChallenge {
  ...codeChallenge_
  ...codeChallengeWithBlocks_
  CodeChallengeCompletionsSuccess: CodeChallengeCompletions(
    orderBy: [{createdAt: desc}]
    where: {success: {equals: true}}
  ) {
    ...CodeChallengePageChallengeCompletion
  }
}
    ${CodeChallengeFragmentDoc}
${CodeChallengeWithBlocksFragmentDoc}
${CodeChallengePageChallengeCompletionFragmentDoc}`;