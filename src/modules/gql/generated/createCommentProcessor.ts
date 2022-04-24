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
export type CreateCommentProcessorMutationVariables = Types.Exact<{
  data: Types.CommentCreateInput;
}>;


export type CreateCommentProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'ResourceResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'Resource' }
      & CommentsConnectionCommentFragment
    )> } };


export const CreateCommentProcessorDocument = gql`
    mutation createCommentProcessor($data: CommentCreateInput!) {
  response: createCommentProcessor(data: $data) {
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
export type CreateCommentProcessorMutationFn = Apollo.MutationFunction<CreateCommentProcessorMutation, CreateCommentProcessorMutationVariables>;

/**
 * __useCreateCommentProcessorMutation__
 *
 * To run a mutation, you first call `useCreateCommentProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentProcessorMutation, { data, loading, error }] = useCreateCommentProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentProcessorMutation, CreateCommentProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentProcessorMutation, CreateCommentProcessorMutationVariables>(CreateCommentProcessorDocument, options);
      }
export type CreateCommentProcessorMutationHookResult = ReturnType<typeof useCreateCommentProcessorMutation>;
export type CreateCommentProcessorMutationResult = Apollo.MutationResult<CreateCommentProcessorMutation>;
export type CreateCommentProcessorMutationOptions = Apollo.BaseMutationOptions<CreateCommentProcessorMutation, CreateCommentProcessorMutationVariables>;