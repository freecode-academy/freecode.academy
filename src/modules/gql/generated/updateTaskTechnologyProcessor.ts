/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TaskTechnologyFragment } from './taskTechnology_';
import { gql } from '@apollo/client';
import { TaskTechnologyFragmentDoc } from './taskTechnology_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateTaskTechnologyProcessorMutationVariables = Types.Exact<{
  data: Types.TaskTechnologyUpdateInput;
  where: Types.TaskTechnologyWhereUniqueInput;
}>;


export type UpdateTaskTechnologyProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'TaskTechnologyResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'TaskTechnology' }
      & TaskTechnologyFragment
    )> } };


export const UpdateTaskTechnologyProcessorDocument = gql`
    mutation updateTaskTechnologyProcessor($data: TaskTechnologyUpdateInput!, $where: TaskTechnologyWhereUniqueInput!) {
  response: updateTaskTechnologyProcessor(data: $data, where: $where) {
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
export type UpdateTaskTechnologyProcessorMutationFn = Apollo.MutationFunction<UpdateTaskTechnologyProcessorMutation, UpdateTaskTechnologyProcessorMutationVariables>;

/**
 * __useUpdateTaskTechnologyProcessorMutation__
 *
 * To run a mutation, you first call `useUpdateTaskTechnologyProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskTechnologyProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskTechnologyProcessorMutation, { data, loading, error }] = useUpdateTaskTechnologyProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTaskTechnologyProcessorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskTechnologyProcessorMutation, UpdateTaskTechnologyProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskTechnologyProcessorMutation, UpdateTaskTechnologyProcessorMutationVariables>(UpdateTaskTechnologyProcessorDocument, options);
      }
export type UpdateTaskTechnologyProcessorMutationHookResult = ReturnType<typeof useUpdateTaskTechnologyProcessorMutation>;
export type UpdateTaskTechnologyProcessorMutationResult = Apollo.MutationResult<UpdateTaskTechnologyProcessorMutation>;
export type UpdateTaskTechnologyProcessorMutationOptions = Apollo.BaseMutationOptions<UpdateTaskTechnologyProcessorMutation, UpdateTaskTechnologyProcessorMutationVariables>;