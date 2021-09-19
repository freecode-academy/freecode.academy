/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TimerNoNestingFragment } from './TimerNoNesting';
import { gql } from '@apollo/client';
import { TimerNoNestingFragmentDoc } from './TimerNoNesting';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateTimerProcessorMutationVariables = Types.Exact<{
  data: Types.TimerCreateInput;
}>;


export type CreateTimerProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'TimerResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'Timer' }
      & TimerNoNestingFragment
    )> } };


export const CreateTimerProcessorDocument = gql`
    mutation createTimerProcessor($data: TimerCreateInput!) {
  response: createTimerProcessor(data: $data) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...TimerNoNesting
    }
  }
}
    ${TimerNoNestingFragmentDoc}`;
export type CreateTimerProcessorMutationFn = Apollo.MutationFunction<CreateTimerProcessorMutation, CreateTimerProcessorMutationVariables>;

/**
 * __useCreateTimerProcessorMutation__
 *
 * To run a mutation, you first call `useCreateTimerProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimerProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimerProcessorMutation, { data, loading, error }] = useCreateTimerProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTimerProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimerProcessorMutation, CreateTimerProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimerProcessorMutation, CreateTimerProcessorMutationVariables>(CreateTimerProcessorDocument, options);
      }
export type CreateTimerProcessorMutationHookResult = ReturnType<typeof useCreateTimerProcessorMutation>;
export type CreateTimerProcessorMutationResult = Apollo.MutationResult<CreateTimerProcessorMutation>;
export type CreateTimerProcessorMutationOptions = Apollo.BaseMutationOptions<CreateTimerProcessorMutation, CreateTimerProcessorMutationVariables>;