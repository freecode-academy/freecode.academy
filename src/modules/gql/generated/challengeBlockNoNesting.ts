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
export type ChallengeBlockNoNestingFragment = { __typename?: 'CodeChallengeBlock', id: string, name?: Types.Maybe<string> };

export const ChallengeBlockNoNestingFragmentDoc = gql`
    fragment challengeBlockNoNesting on CodeChallengeBlock {
  id
  name
}
    `;