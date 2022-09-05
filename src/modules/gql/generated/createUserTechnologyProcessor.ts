/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateUserTechnologyProcessorMutationVariables = Types.Exact<{
  data: Types.UserTechnologyCreateInput;
}>;


export type CreateUserTechnologyProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'UserTechnologyResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<{ __typename?: 'UserTechnology', id: string }> } };


export const CreateUserTechnologyProcessorDocument = gql`
    mutation createUserTechnologyProcessor($data: UserTechnologyCreateInput!) {
  response: createUserTechnologyProcessor(data: $data) {
    success
    message
    errors {
      key
      message
    }
    data {
      id
    }
  }
}
    `;
export type CreateUserTechnologyProcessorMutationFn = Apollo.MutationFunction<CreateUserTechnologyProcessorMutation, CreateUserTechnologyProcessorMutationVariables>;

/**
 * __useCreateUserTechnologyProcessorMutation__
 *
 * To run a mutation, you first call `useCreateUserTechnologyProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserTechnologyProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserTechnologyProcessorMutation, { data, loading, error }] = useCreateUserTechnologyProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserTechnologyProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserTechnologyProcessorMutation, CreateUserTechnologyProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserTechnologyProcessorMutation, CreateUserTechnologyProcessorMutationVariables>(CreateUserTechnologyProcessorDocument, options);
      }
export type CreateUserTechnologyProcessorMutationHookResult = ReturnType<typeof useCreateUserTechnologyProcessorMutation>;
export type CreateUserTechnologyProcessorMutationResult = Apollo.MutationResult<CreateUserTechnologyProcessorMutation>;
export type CreateUserTechnologyProcessorMutationOptions = Apollo.BaseMutationOptions<CreateUserTechnologyProcessorMutation, CreateUserTechnologyProcessorMutationVariables>;