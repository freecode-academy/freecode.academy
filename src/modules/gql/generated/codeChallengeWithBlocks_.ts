/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type CodeChallengeWithBlocksFragment = { __typename?: 'CodeChallenge', id: string, name?: Types.Maybe<string>, localeTitle?: Types.Maybe<string>, CodeChallengeBlock?: Types.Maybe<{ __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string>, Parent?: Types.Maybe<{ __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string> }> }> };

export const CodeChallengeWithBlocksFragmentDoc = gql`
    fragment codeChallengeWithBlocks_ on CodeChallenge {
  id
  name
  localeTitle
  CodeChallengeBlock {
    id
    name
    Parent {
      id
      name
    }
  }
}
    `;