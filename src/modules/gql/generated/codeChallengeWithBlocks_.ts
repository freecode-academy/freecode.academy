/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type CodeChallengeWithBlocksFragment = { __typename?: 'CodeChallenge', id: string, name?: Types.Maybe<string>, localeTitle?: Types.Maybe<string>, Block?: Types.Maybe<{ __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string>, Parent?: Types.Maybe<{ __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string> }> }> };

export const CodeChallengeWithBlocksFragmentDoc = gql`
    fragment codeChallengeWithBlocks_ on CodeChallenge {
  id
  name
  localeTitle
  Block {
    id
    name
    Parent {
      id
      name
    }
  }
}
    `;