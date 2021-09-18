/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserProfileFragment } from './userProfile';
import { gql } from '@apollo/client';
import { UserProfileFragmentDoc } from './userProfile';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateUserProcessorMutationVariables = Types.Exact<{
  data: Types.UserUpdateInput;
  withMentorMentee?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type UpdateUserProcessorMutation = { __typename?: 'Mutation', updateUserProcessor: { __typename?: 'UserResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'User' }
      & UserProfileFragment
    )> } };


export const UpdateUserProcessorDocument = gql`
    mutation updateUserProcessor($data: UserUpdateInput!, $withMentorMentee: Boolean = true) {
  updateUserProcessor(data: $data) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...userProfile
    }
  }
}
    ${UserProfileFragmentDoc}`;
export type UpdateUserProcessorMutationFn = Apollo.MutationFunction<UpdateUserProcessorMutation, UpdateUserProcessorMutationVariables>;

/**
 * __useUpdateUserProcessorMutation__
 *
 * To run a mutation, you first call `useUpdateUserProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProcessorMutation, { data, loading, error }] = useUpdateUserProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      withMentorMentee: // value for 'withMentorMentee'
 *   },
 * });
 */
export function useUpdateUserProcessorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProcessorMutation, UpdateUserProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProcessorMutation, UpdateUserProcessorMutationVariables>(UpdateUserProcessorDocument, options);
      }
export type UpdateUserProcessorMutationHookResult = ReturnType<typeof useUpdateUserProcessorMutation>;
export type UpdateUserProcessorMutationResult = Apollo.MutationResult<UpdateUserProcessorMutation>;
export type UpdateUserProcessorMutationOptions = Apollo.BaseMutationOptions<UpdateUserProcessorMutation, UpdateUserProcessorMutationVariables>;