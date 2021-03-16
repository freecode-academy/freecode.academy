/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type CreateProjectProcessorMutationVariables = Types.Exact<{
  data: Types.ProjectCreateInput;
}>;


export type CreateProjectProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'ProjectResponse', success: boolean, message?: Types.Maybe<string>, errors: Array<{ __typename?: 'Error', key: string, message: string }>, data?: Types.Maybe<{ __typename?: 'Project', id: string }> } };


export const CreateProjectProcessorDocument = gql`
    mutation createProjectProcessor($data: ProjectCreateInput!) {
  response: createProjectProcessor(data: $data) {
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
export type CreateProjectProcessorMutationFn = Apollo.MutationFunction<CreateProjectProcessorMutation, CreateProjectProcessorMutationVariables>;

/**
 * __useCreateProjectProcessorMutation__
 *
 * To run a mutation, you first call `useCreateProjectProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectProcessorMutation, { data, loading, error }] = useCreateProjectProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProjectProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectProcessorMutation, CreateProjectProcessorMutationVariables>) {
        return Apollo.useMutation<CreateProjectProcessorMutation, CreateProjectProcessorMutationVariables>(CreateProjectProcessorDocument, baseOptions);
      }
export type CreateProjectProcessorMutationHookResult = ReturnType<typeof useCreateProjectProcessorMutation>;
export type CreateProjectProcessorMutationResult = Apollo.MutationResult<CreateProjectProcessorMutation>;
export type CreateProjectProcessorMutationOptions = Apollo.BaseMutationOptions<CreateProjectProcessorMutation, CreateProjectProcessorMutationVariables>;