/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type MeUserCodeChallengeCompletionFragment = { __typename?: 'CodeChallengeCompletion', id: string, Task?: Types.Maybe<{ __typename?: 'Task', id: string, status: Types.TaskStatus }>, CodeChallenge?: Types.Maybe<{ __typename?: 'CodeChallenge', id: string }> };

export const MeUserCodeChallengeCompletionFragmentDoc = gql`
    fragment MeUserCodeChallengeCompletion on CodeChallengeCompletion {
  id
  Task {
    id
    status
  }
  CodeChallenge {
    id
  }
}
    `;