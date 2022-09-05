/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserLearnStrategyFragment } from './UserLearnStrategy_';
import { gql } from '@apollo/client';
import { UserLearnStrategyFragmentDoc } from './UserLearnStrategy_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateUserLearnStrategyMutationVariables = Types.Exact<{
  data: Types.UserLearnStrategyCreateInput;
}>;


export type CreateUserLearnStrategyMutation = { __typename?: 'Mutation', createUserLearnStrategy: (
    { __typename?: 'UserLearnStrategy' }
    & UserLearnStrategyFragment
  ) };


export const CreateUserLearnStrategyDocument = gql`
    mutation createUserLearnStrategy($data: UserLearnStrategyCreateInput!) {
  createUserLearnStrategy(data: $data) {
    ...UserLearnStrategy_
  }
}
    ${UserLearnStrategyFragmentDoc}`;
export type CreateUserLearnStrategyMutationFn = Apollo.MutationFunction<CreateUserLearnStrategyMutation, CreateUserLearnStrategyMutationVariables>;

/**
 * __useCreateUserLearnStrategyMutation__
 *
 * To run a mutation, you first call `useCreateUserLearnStrategyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserLearnStrategyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserLearnStrategyMutation, { data, loading, error }] = useCreateUserLearnStrategyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserLearnStrategyMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserLearnStrategyMutation, CreateUserLearnStrategyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserLearnStrategyMutation, CreateUserLearnStrategyMutationVariables>(CreateUserLearnStrategyDocument, options);
      }
export type CreateUserLearnStrategyMutationHookResult = ReturnType<typeof useCreateUserLearnStrategyMutation>;
export type CreateUserLearnStrategyMutationResult = Apollo.MutationResult<CreateUserLearnStrategyMutation>;
export type CreateUserLearnStrategyMutationOptions = Apollo.BaseMutationOptions<CreateUserLearnStrategyMutation, CreateUserLearnStrategyMutationVariables>;