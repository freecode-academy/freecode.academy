/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TaskTechnologyFragment } from './taskTechnology_';
import { gql } from '@apollo/client';
import { TaskTechnologyFragmentDoc } from './taskTechnology_';
import * as Apollo from '@apollo/client';
export type CreateTaskTechnologyProcessorMutationVariables = Types.Exact<{
  data: Types.TaskTechnologyCreateInput;
}>;


export type CreateTaskTechnologyProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'TaskTechnologyResponse', success: boolean, message?: Types.Maybe<string>, errors: Array<{ __typename?: 'Error', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'TaskTechnology' }
      & TaskTechnologyFragment
    )> } };


export const CreateTaskTechnologyProcessorDocument = gql`
    mutation createTaskTechnologyProcessor($data: TaskTechnologyCreateInput!) {
  response: createTaskTechnologyProcessor(data: $data) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...taskTechnology_
    }
  }
}
    ${TaskTechnologyFragmentDoc}`;
export type CreateTaskTechnologyProcessorMutationFn = Apollo.MutationFunction<CreateTaskTechnologyProcessorMutation, CreateTaskTechnologyProcessorMutationVariables>;

/**
 * __useCreateTaskTechnologyProcessorMutation__
 *
 * To run a mutation, you first call `useCreateTaskTechnologyProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskTechnologyProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskTechnologyProcessorMutation, { data, loading, error }] = useCreateTaskTechnologyProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskTechnologyProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskTechnologyProcessorMutation, CreateTaskTechnologyProcessorMutationVariables>) {
        return Apollo.useMutation<CreateTaskTechnologyProcessorMutation, CreateTaskTechnologyProcessorMutationVariables>(CreateTaskTechnologyProcessorDocument, baseOptions);
      }
export type CreateTaskTechnologyProcessorMutationHookResult = ReturnType<typeof useCreateTaskTechnologyProcessorMutation>;
export type CreateTaskTechnologyProcessorMutationResult = Apollo.MutationResult<CreateTaskTechnologyProcessorMutation>;
export type CreateTaskTechnologyProcessorMutationOptions = Apollo.BaseMutationOptions<CreateTaskTechnologyProcessorMutation, CreateTaskTechnologyProcessorMutationVariables>;