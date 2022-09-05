/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserTechnologyFragment } from './UserTechnology_';
import { gql } from '@apollo/client';
import { UserTechnologyFragmentDoc } from './UserTechnology_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateUserTechnologyProcessorMutationVariables = Types.Exact<{
  data: Types.UserTechnologyUpdateInput;
  where: Types.UserTechnologyWhereUniqueInput;
}>;


export type UpdateUserTechnologyProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'UserTechnologyResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'UserTechnology' }
      & UserTechnologyFragment
    )> } };


export const UpdateUserTechnologyProcessorDocument = gql`
    mutation updateUserTechnologyProcessor($data: UserTechnologyUpdateInput!, $where: UserTechnologyWhereUniqueInput!) {
  response: updateUserTechnologyProcessor(data: $data, where: $where) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...UserTechnology_
    }
  }
}
    ${UserTechnologyFragmentDoc}`;
export type UpdateUserTechnologyProcessorMutationFn = Apollo.MutationFunction<UpdateUserTechnologyProcessorMutation, UpdateUserTechnologyProcessorMutationVariables>;

/**
 * __useUpdateUserTechnologyProcessorMutation__
 *
 * To run a mutation, you first call `useUpdateUserTechnologyProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserTechnologyProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserTechnologyProcessorMutation, { data, loading, error }] = useUpdateUserTechnologyProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserTechnologyProcessorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserTechnologyProcessorMutation, UpdateUserTechnologyProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserTechnologyProcessorMutation, UpdateUserTechnologyProcessorMutationVariables>(UpdateUserTechnologyProcessorDocument, options);
      }
export type UpdateUserTechnologyProcessorMutationHookResult = ReturnType<typeof useUpdateUserTechnologyProcessorMutation>;
export type UpdateUserTechnologyProcessorMutationResult = Apollo.MutationResult<UpdateUserTechnologyProcessorMutation>;
export type UpdateUserTechnologyProcessorMutationOptions = Apollo.BaseMutationOptions<UpdateUserTechnologyProcessorMutation, UpdateUserTechnologyProcessorMutationVariables>;