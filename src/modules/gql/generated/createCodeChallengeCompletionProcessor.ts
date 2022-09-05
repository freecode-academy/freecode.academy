/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeCompletionFragment } from './codeChallengeCompletion_';
import { gql } from '@apollo/client';
import { CodeChallengeCompletionFragmentDoc } from './codeChallengeCompletion_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateCodeChallengeCompletionProcessorMutationVariables = Types.Exact<{
  data: Types.CodeChallengeCompletionCreateInput;
}>;


export type CreateCodeChallengeCompletionProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'CodeChallengeCompletionResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'CodeChallengeCompletion' }
      & CodeChallengeCompletionFragment
    )> } };


export const CreateCodeChallengeCompletionProcessorDocument = gql`
    mutation createCodeChallengeCompletionProcessor($data: CodeChallengeCompletionCreateInput!) {
  response: createCodeChallengeCompletionProcessor(data: $data) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...codeChallengeCompletion_
    }
  }
}
    ${CodeChallengeCompletionFragmentDoc}`;
export type CreateCodeChallengeCompletionProcessorMutationFn = Apollo.MutationFunction<CreateCodeChallengeCompletionProcessorMutation, CreateCodeChallengeCompletionProcessorMutationVariables>;

/**
 * __useCreateCodeChallengeCompletionProcessorMutation__
 *
 * To run a mutation, you first call `useCreateCodeChallengeCompletionProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCodeChallengeCompletionProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCodeChallengeCompletionProcessorMutation, { data, loading, error }] = useCreateCodeChallengeCompletionProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCodeChallengeCompletionProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateCodeChallengeCompletionProcessorMutation, CreateCodeChallengeCompletionProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCodeChallengeCompletionProcessorMutation, CreateCodeChallengeCompletionProcessorMutationVariables>(CreateCodeChallengeCompletionProcessorDocument, options);
      }
export type CreateCodeChallengeCompletionProcessorMutationHookResult = ReturnType<typeof useCreateCodeChallengeCompletionProcessorMutation>;
export type CreateCodeChallengeCompletionProcessorMutationResult = Apollo.MutationResult<CreateCodeChallengeCompletionProcessorMutation>;
export type CreateCodeChallengeCompletionProcessorMutationOptions = Apollo.BaseMutationOptions<CreateCodeChallengeCompletionProcessorMutation, CreateCodeChallengeCompletionProcessorMutationVariables>;