/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CommentsConnectionCommentFragment } from './commentsConnectionComment';
import { gql } from '@apollo/client';
import { CommentsConnectionCommentFragmentDoc } from './commentsConnectionComment';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateCommentProcessorMutationVariables = Types.Exact<{
  data: Types.CommentUpdateInput;
  where: Types.ResourceWhereUniqueInput;
}>;


export type UpdateCommentProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'ResourceResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'Resource' }
      & CommentsConnectionCommentFragment
    )> } };


export const UpdateCommentProcessorDocument = gql`
    mutation updateCommentProcessor($data: CommentUpdateInput!, $where: ResourceWhereUniqueInput!) {
  response: updateCommentProcessor(data: $data, where: $where) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...commentsConnectionComment
    }
  }
}
    ${CommentsConnectionCommentFragmentDoc}`;
export type UpdateCommentProcessorMutationFn = Apollo.MutationFunction<UpdateCommentProcessorMutation, UpdateCommentProcessorMutationVariables>;

/**
 * __useUpdateCommentProcessorMutation__
 *
 * To run a mutation, you first call `useUpdateCommentProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentProcessorMutation, { data, loading, error }] = useUpdateCommentProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateCommentProcessorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentProcessorMutation, UpdateCommentProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentProcessorMutation, UpdateCommentProcessorMutationVariables>(UpdateCommentProcessorDocument, options);
      }
export type UpdateCommentProcessorMutationHookResult = ReturnType<typeof useUpdateCommentProcessorMutation>;
export type UpdateCommentProcessorMutationResult = Apollo.MutationResult<UpdateCommentProcessorMutation>;
export type UpdateCommentProcessorMutationOptions = Apollo.BaseMutationOptions<UpdateCommentProcessorMutation, UpdateCommentProcessorMutationVariables>;