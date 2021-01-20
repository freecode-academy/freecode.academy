/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CodeChallengeWithBlocks_Fragment = { __typename?: 'CodeChallenge', id: string, name?: Types.Maybe<string>, localeTitle?: Types.Maybe<string>, Block: { __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string>, Parent?: Types.Maybe<{ __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string> }> } };

export const CodeChallengeWithBlocks_FragmentDoc = gql`
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