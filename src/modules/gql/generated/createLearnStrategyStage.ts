/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { LearnStrategyStageNoNestingFragment } from './learnStrategyStageNoNesting';
import { gql } from '@apollo/client';
import { LearnStrategyStageNoNestingFragmentDoc } from './learnStrategyStageNoNesting';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateLearnStrategyStageMutationVariables = Types.Exact<{
  data: Types.LearnStrategyStageCreateInput;
}>;


export type CreateLearnStrategyStageMutation = { __typename?: 'Mutation', createLearnStrategyStage: (
    { __typename?: 'LearnStrategyStage' }
    & LearnStrategyStageNoNestingFragment
  ) };


export const CreateLearnStrategyStageDocument = gql`
    mutation createLearnStrategyStage($data: LearnStrategyStageCreateInput!) {
  createLearnStrategyStage(data: $data) {
    ...learnStrategyStageNoNesting
  }
}
    ${LearnStrategyStageNoNestingFragmentDoc}`;
export type CreateLearnStrategyStageMutationFn = Apollo.MutationFunction<CreateLearnStrategyStageMutation, CreateLearnStrategyStageMutationVariables>;

/**
 * __useCreateLearnStrategyStageMutation__
 *
 * To run a mutation, you first call `useCreateLearnStrategyStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLearnStrategyStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLearnStrategyStageMutation, { data, loading, error }] = useCreateLearnStrategyStageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLearnStrategyStageMutation(baseOptions?: Apollo.MutationHookOptions<CreateLearnStrategyStageMutation, CreateLearnStrategyStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLearnStrategyStageMutation, CreateLearnStrategyStageMutationVariables>(CreateLearnStrategyStageDocument, options);
      }
export type CreateLearnStrategyStageMutationHookResult = ReturnType<typeof useCreateLearnStrategyStageMutation>;
export type CreateLearnStrategyStageMutationResult = Apollo.MutationResult<CreateLearnStrategyStageMutation>;
export type CreateLearnStrategyStageMutationOptions = Apollo.BaseMutationOptions<CreateLearnStrategyStageMutation, CreateLearnStrategyStageMutationVariables>;