/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TaskNoNestingFragment } from './TaskNoNesting';
import { gql } from '@apollo/client';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateTaskProcessorMutationVariables = Types.Exact<{
  data: Types.TaskCreateInput;
}>;


export type CreateTaskProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'TaskResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'Task' }
      & TaskNoNestingFragment
    )> } };


export const CreateTaskProcessorDocument = gql`
    mutation createTaskProcessor($data: TaskCreateInput!) {
  response: createTaskProcessor(data: $data) {
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
export type CreateTaskProcessorMutationFn = Apollo.MutationFunction<CreateTaskProcessorMutation, CreateTaskProcessorMutationVariables>;

/**
 * __useCreateTaskProcessorMutation__
 *
 * To run a mutation, you first call `useCreateTaskProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskProcessorMutation, { data, loading, error }] = useCreateTaskProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskProcessorMutation, CreateTaskProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskProcessorMutation, CreateTaskProcessorMutationVariables>(CreateTaskProcessorDocument, options);
      }
export type CreateTaskProcessorMutationHookResult = ReturnType<typeof useCreateTaskProcessorMutation>;
export type CreateTaskProcessorMutationResult = Apollo.MutationResult<CreateTaskProcessorMutation>;
export type CreateTaskProcessorMutationOptions = Apollo.BaseMutationOptions<CreateTaskProcessorMutation, CreateTaskProcessorMutationVariables>;