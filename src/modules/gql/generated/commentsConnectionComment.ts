/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentsConnectionCommentUserFragment } from './commentsConnectionCommentUser';
import { TaskNoNestingFragment } from './TaskNoNesting';
import { gql } from '@apollo/client';
import { CommentsConnectionCommentUserFragmentDoc } from './commentsConnectionCommentUser';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
export type CommentsConnectionCommentFragment = { __typename?: 'Resource', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, type?: Types.Maybe<Types.ResourceType>, content?: Types.Maybe<any>, components?: Types.Maybe<any>, uri: string, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & CommentsConnectionCommentUserFragment
  )>, Topic?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, uri: string, type?: Types.Maybe<Types.ResourceType> }>, Task?: Types.Maybe<(
    { __typename?: 'Task' }
    & TaskNoNestingFragment
  )> };

export const CommentsConnectionCommentFragmentDoc = gql`
    fragment commentsConnectionComment on Resource {
  id
  createdAt
  updatedAt
  type
  content
  components
  uri
  CreatedBy {
    ...commentsConnectionCommentUser
  }
  Topic {
    id
    name
    uri
    type
  }
  Task {
    ...TaskNoNesting
  }
}
    ${CommentsConnectionCommentUserFragmentDoc}
${TaskNoNestingFragmentDoc}`;