/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CodeChallengeCompletionNoNestingFragment = { __typename?: 'CodeChallengeCompletion', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, success?: Types.Maybe<boolean>, content?: Types.Maybe<string> };

export const CodeChallengeCompletionNoNestingFragmentDoc = gql`
    fragment codeChallengeCompletionNoNesting on CodeChallengeCompletion {
  id
  createdAt
  updatedAt
  success
  content
}
    `;