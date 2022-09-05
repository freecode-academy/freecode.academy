/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CommentNoNestingFragment } from './CommentNoNesting';
import { CommentsConnectionCommentUserFragment } from './commentsConnectionCommentUser';
import { TaskNoNestingFragment } from './TaskNoNesting';
import { gql } from '@apollo/client';
import { CommentNoNestingFragmentDoc } from './CommentNoNesting';
import { CommentsConnectionCommentUserFragmentDoc } from './commentsConnectionCommentUser';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
export type CommentsConnectionCommentFragment = (
  { __typename?: 'Resource', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & CommentsConnectionCommentUserFragment
  )>, Topic?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, uri: string, type?: Types.Maybe<Types.ResourceType> }>, Task?: Types.Maybe<(
    { __typename?: 'Task' }
    & TaskNoNestingFragment
  )> }
  & CommentNoNestingFragment
);

export const CommentsConnectionCommentFragmentDoc = gql`
    fragment commentsConnectionComment on Resource {
  ...CommentNoNesting
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
    ${CommentNoNestingFragmentDoc}
${CommentsConnectionCommentUserFragmentDoc}
${TaskNoNestingFragmentDoc}`;