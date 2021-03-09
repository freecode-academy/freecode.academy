/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CodeChallengeCompletionFragment = { __typename?: 'CodeChallengeCompletion', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, success?: Types.Maybe<boolean>, content?: Types.Maybe<string>, Task: { __typename?: 'Task', id: string, status: Types.TaskStatus }, CodeChallenge: { __typename?: 'CodeChallenge', id: string } };

export const CodeChallengeCompletionFragmentDoc = gql`
    fragment codeChallengeCompletion_ on CodeChallengeCompletion {
  id
  createdAt
  updatedAt
  success
  content
  Task {
    id
    status
  }
  CodeChallenge {
    id
  }
}
    `;