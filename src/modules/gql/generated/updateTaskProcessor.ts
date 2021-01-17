/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TaskNoNestingFragment } from './TaskNoNesting';
import { gql } from '@apollo/client';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import * as Apollo from '@apollo/client';
export type UpdateTaskProcessorMutationVariables = Types.Exact<{
  data: Types.TaskUpdateInput;
  where: Types.TaskWhereUniqueInput;
}>;


export type UpdateTaskProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'TaskResponse', success: boolean, message?: Types.Maybe<string>, errors: Array<{ __typename?: 'Error', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'Task' }
      & TaskNoNestingFragment
    )> } };


export const UpdateTaskProcessorDocument = gql`
    mutation updateTaskProcessor($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
  response: updateTaskProcessor(data: $data, where: $where) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...TaskNoNesting
    }
  }
}
    ${TaskNoNestingFragmentDoc}`;
export type UpdateTaskProcessorMutationFn = Apollo.MutationFunction<UpdateTaskProcessorMutation, UpdateTaskProcessorMutationVariables>;

/**
 * __useUpdateTaskProcessorMutation__
 *
 * To run a mutation, you first call `useUpdateTaskProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskProcessorMutation, { data, loading, error }] = useUpdateTaskProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTaskProcessorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskProcessorMutation, UpdateTaskProcessorMutationVariables>) {
        return Apollo.useMutation<UpdateTaskProcessorMutation, UpdateTaskProcessorMutationVariables>(UpdateTaskProcessorDocument, baseOptions);
      }
export type UpdateTaskProcessorMutationHookResult = ReturnType<typeof useUpdateTaskProcessorMutation>;
export type UpdateTaskProcessorMutationResult = Apollo.MutationResult<UpdateTaskProcessorMutation>;
export type UpdateTaskProcessorMutationOptions = Apollo.BaseMutationOptions<UpdateTaskProcessorMutation, UpdateTaskProcessorMutationVariables>;