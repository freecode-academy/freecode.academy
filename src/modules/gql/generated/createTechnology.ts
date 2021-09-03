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
export type CreateTechnologyMutationVariables = Types.Exact<{
  data: Types.TechnologyCreateInput;
}>;


export type CreateTechnologyMutation = { __typename?: 'Mutation', createTechnology: (
    { __typename?: 'Technology' }
    & TechnologyFragment
  ) };


export const CreateTechnologyDocument = gql`
    mutation createTechnology($data: TechnologyCreateInput!) {
  createTechnology(data: $data) {
    ...technology_
  }
}
    ${TechnologyFragmentDoc}`;
export type CreateTechnologyMutationFn = Apollo.MutationFunction<CreateTechnologyMutation, CreateTechnologyMutationVariables>;

/**
 * __useCreateTechnologyMutation__
 *
 * To run a mutation, you first call `useCreateTechnologyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTechnologyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTechnologyMutation, { data, loading, error }] = useCreateTechnologyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTechnologyMutation(baseOptions?: Apollo.MutationHookOptions<CreateTechnologyMutation, CreateTechnologyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTechnologyMutation, CreateTechnologyMutationVariables>(CreateTechnologyDocument, options);
      }
export type CreateTechnologyMutationHookResult = ReturnType<typeof useCreateTechnologyMutation>;
export type CreateTechnologyMutationResult = Apollo.MutationResult<CreateTechnologyMutation>;
export type CreateTechnologyMutationOptions = Apollo.BaseMutationOptions<CreateTechnologyMutation, CreateTechnologyMutationVariables>;