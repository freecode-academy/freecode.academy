/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type DeleteLearnStrategyStageMutationVariables = Types.Exact<{
  where: Types.LearnStrategyStageWhereUniqueInput;
}>;


export type DeleteLearnStrategyStageMutation = { __typename?: 'Mutation', deleteLearnStrategyStage: { __typename?: 'LearnStrategyStage', id: string } };


export const DeleteLearnStrategyStageDocument = gql`
    mutation deleteLearnStrategyStage($where: LearnStrategyStageWhereUniqueInput!) {
  deleteLearnStrategyStage(where: $where) {
    id
  }
}
    `;
export type DeleteLearnStrategyStageMutationFn = Apollo.MutationFunction<DeleteLearnStrategyStageMutation, DeleteLearnStrategyStageMutationVariables>;

/**
 * __useDeleteLearnStrategyStageMutation__
 *
 * To run a mutation, you first call `useDeleteLearnStrategyStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLearnStrategyStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLearnStrategyStageMutation, { data, loading, error }] = useDeleteLearnStrategyStageMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteLearnStrategyStageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLearnStrategyStageMutation, DeleteLearnStrategyStageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLearnStrategyStageMutation, DeleteLearnStrategyStageMutationVariables>(DeleteLearnStrategyStageDocument, options);
      }
export type DeleteLearnStrategyStageMutationHookResult = ReturnType<typeof useDeleteLearnStrategyStageMutation>;
export type DeleteLearnStrategyStageMutationResult = Apollo.MutationResult<DeleteLearnStrategyStageMutation>;
export type DeleteLearnStrategyStageMutationOptions = Apollo.BaseMutationOptions<DeleteLearnStrategyStageMutation, DeleteLearnStrategyStageMutationVariables>;