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
export type UpdateLearnStrategyMutationVariables = Types.Exact<{
  data: Types.LearnStrategyUpdateInput;
  where: Types.LearnStrategyWhereUniqueInput;
}>;


export type UpdateLearnStrategyMutation = { __typename?: 'Mutation', updateLearnStrategy: (
    { __typename?: 'LearnStrategy' }
    & LearnStrategyFragment
  ) };


export const UpdateLearnStrategyDocument = gql`
    mutation updateLearnStrategy($data: LearnStrategyUpdateInput!, $where: LearnStrategyWhereUniqueInput!) {
  updateLearnStrategy(data: $data, where: $where) {
    ...learnStrategy_
  }
}
    ${LearnStrategyFragmentDoc}`;
export type UpdateLearnStrategyMutationFn = Apollo.MutationFunction<UpdateLearnStrategyMutation, UpdateLearnStrategyMutationVariables>;

/**
 * __useUpdateLearnStrategyMutation__
 *
 * To run a mutation, you first call `useUpdateLearnStrategyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLearnStrategyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLearnStrategyMutation, { data, loading, error }] = useUpdateLearnStrategyMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateLearnStrategyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLearnStrategyMutation, UpdateLearnStrategyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLearnStrategyMutation, UpdateLearnStrategyMutationVariables>(UpdateLearnStrategyDocument, options);
      }
export type UpdateLearnStrategyMutationHookResult = ReturnType<typeof useUpdateLearnStrategyMutation>;
export type UpdateLearnStrategyMutationResult = Apollo.MutationResult<UpdateLearnStrategyMutation>;
export type UpdateLearnStrategyMutationOptions = Apollo.BaseMutationOptions<UpdateLearnStrategyMutation, UpdateLearnStrategyMutationVariables>;