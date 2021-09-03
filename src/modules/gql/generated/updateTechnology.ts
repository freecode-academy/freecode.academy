/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologyFragment } from './technology_';
import { gql } from '@apollo/client';
import { TechnologyFragmentDoc } from './technology_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateTechnologyMutationVariables = Types.Exact<{
  data: Types.TechnologyUpdateInput;
  where: Types.TechnologyWhereUniqueInput;
}>;


export type UpdateTechnologyMutation = { __typename?: 'Mutation', updateTechnology: (
    { __typename?: 'Technology' }
    & TechnologyFragment
  ) };


export const UpdateTechnologyDocument = gql`
    mutation updateTechnology($data: TechnologyUpdateInput!, $where: TechnologyWhereUniqueInput!) {
  updateTechnology(data: $data, where: $where) {
    ...technology_
  }
}
    ${TechnologyFragmentDoc}`;
export type UpdateTechnologyMutationFn = Apollo.MutationFunction<UpdateTechnologyMutation, UpdateTechnologyMutationVariables>;

/**
 * __useUpdateTechnologyMutation__
 *
 * To run a mutation, you first call `useUpdateTechnologyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTechnologyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTechnologyMutation, { data, loading, error }] = useUpdateTechnologyMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTechnologyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTechnologyMutation, UpdateTechnologyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTechnologyMutation, UpdateTechnologyMutationVariables>(UpdateTechnologyDocument, options);
      }
export type UpdateTechnologyMutationHookResult = ReturnType<typeof useUpdateTechnologyMutation>;
export type UpdateTechnologyMutationResult = Apollo.MutationResult<UpdateTechnologyMutation>;
export type UpdateTechnologyMutationOptions = Apollo.BaseMutationOptions<UpdateTechnologyMutation, UpdateTechnologyMutationVariables>;