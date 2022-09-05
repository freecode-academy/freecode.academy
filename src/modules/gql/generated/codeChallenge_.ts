/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { ResourceFragment } from './resource_';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { ResourceFragmentDoc } from './resource_';
export type CodeChallengeFragment = { __typename?: 'CodeChallenge', id: string, externalKey?: Types.Maybe<string>, createdAt: globalThis.Date, updatedAt: globalThis.Date, name?: Types.Maybe<string>, dashedName?: Types.Maybe<string>, localeTitle?: Types.Maybe<string>, description?: Types.Maybe<string>, challengeType?: Types.Maybe<number>, forumTopicId?: Types.Maybe<number>, translations?: Types.Maybe<any>, tests?: Types.Maybe<any>, solutions?: Types.Maybe<any>, instructions?: Types.Maybe<string>, files?: Types.Maybe<any>, videoUrl?: Types.Maybe<string>, order?: Types.Maybe<number>, superOrder?: Types.Maybe<number>, challengeOrder?: Types.Maybe<number>, required?: Types.Maybe<any>, isRequired?: Types.Maybe<boolean>, isPrivate?: Types.Maybe<boolean>, isBeta?: Types.Maybe<boolean>, template?: Types.Maybe<string>, rank?: Types.Maybe<number>, Block?: Types.Maybe<string>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Topic?: Types.Maybe<(
    { __typename?: 'Resource' }
    & ResourceFragment
  )> };

export const CodeChallengeFragmentDoc = gql`
    fragment codeChallenge_ on CodeChallenge {
  id
  CreatedBy {
    ...UserNoNesting
  }
  externalKey
  createdAt
  updatedAt
  name
  dashedName
  localeTitle
  description
  challengeType
  forumTopicId
  translations
  tests
  solutions
  instructions
  files
  videoUrl
  order
  superOrder
  challengeOrder
  required
  isRequired
  isPrivate
  isBeta
  template
  rank
  Block
  Topic {
    ...resource_
  }
}
    ${UserNoNestingFragmentDoc}
${ResourceFragmentDoc}`;