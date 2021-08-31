/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { LearnStrategyFragment } from './learnStrategy_';
import { gql } from '@apollo/client';
import { LearnStrategyFragmentDoc } from './learnStrategy_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateLearnStrategyMutationVariables = Types.Exact<{
  data: Types.LearnStrategyCreateInput;
}>;


export type CreateLearnStrategyMutation = { __typename?: 'Mutation', createLearnStrategy: (
    { __typename?: 'LearnStrategy' }
    & LearnStrategyFragment
  ) };


export const CreateLearnStrategyDocument = gql`
    mutation createLearnStrategy($data: LearnStrategyCreateInput!) {
  createLearnStrategy(data: $data) {
    ...learnStrategy_
  }
}
    ${LearnStrategyFragmentDoc}`;
export type CreateLearnStrategyMutationFn = Apollo.MutationFunction<CreateLearnStrategyMutation, CreateLearnStrategyMutationVariables>;

/**
 * __useCreateLearnStrategyMutation__
 *
 * To run a mutation, you first call `useCreateLearnStrategyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLearnStrategyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLearnStrategyMutation, { data, loading, error }] = useCreateLearnStrategyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLearnStrategyMutation(baseOptions?: Apollo.MutationHookOptions<CreateLearnStrategyMutation, CreateLearnStrategyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLearnStrategyMutation, CreateLearnStrategyMutationVariables>(CreateLearnStrategyDocument, options);
      }
export type CreateLearnStrategyMutationHookResult = ReturnType<typeof useCreateLearnStrategyMutation>;
export type CreateLearnStrategyMutationResult = Apollo.MutationResult<CreateLearnStrategyMutation>;
export type CreateLearnStrategyMutationOptions = Apollo.BaseMutationOptions<CreateLearnStrategyMutation, CreateLearnStrategyMutationVariables>;