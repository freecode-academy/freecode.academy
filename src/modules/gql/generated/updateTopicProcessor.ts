/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ResourceFragment } from './resource_';
import { gql } from '@apollo/client';
import { ResourceFragmentDoc } from './resource_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateTopicProcessorMutationVariables = Types.Exact<{
  data: Types.TopicUpdateInput;
  where: Types.ResourceWhereUniqueInput;
}>;


export type UpdateTopicProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'ResourceResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'Resource' }
      & ResourceFragment
    )> } };


export const UpdateTopicProcessorDocument = gql`
    mutation updateTopicProcessor($data: TopicUpdateInput!, $where: ResourceWhereUniqueInput!) {
  response: updateTopicProcessor(data: $data, where: $where) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...resource_
    }
  }
}
    ${ResourceFragmentDoc}`;
export type UpdateTopicProcessorMutationFn = Apollo.MutationFunction<UpdateTopicProcessorMutation, UpdateTopicProcessorMutationVariables>;

/**
 * __useUpdateTopicProcessorMutation__
 *
 * To run a mutation, you first call `useUpdateTopicProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTopicProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTopicProcessorMutation, { data, loading, error }] = useUpdateTopicProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTopicProcessorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTopicProcessorMutation, UpdateTopicProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTopicProcessorMutation, UpdateTopicProcessorMutationVariables>(UpdateTopicProcessorDocument, options);
      }
export type UpdateTopicProcessorMutationHookResult = ReturnType<typeof useUpdateTopicProcessorMutation>;
export type UpdateTopicProcessorMutationResult = Apollo.MutationResult<UpdateTopicProcessorMutation>;
export type UpdateTopicProcessorMutationOptions = Apollo.BaseMutationOptions<UpdateTopicProcessorMutation, UpdateTopicProcessorMutationVariables>;