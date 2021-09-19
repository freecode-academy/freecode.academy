/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ChatMessageFragment } from './chatMessage_';
import { gql } from '@apollo/client';
import { ChatMessageFragmentDoc } from './chatMessage_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateChatMessageProcessorMutationVariables = Types.Exact<{
  data: Types.ChatMessageCreateInput;
}>;


export type CreateChatMessageProcessorMutation = { __typename?: 'Mutation', response: { __typename?: 'ChatMessageResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
      { __typename?: 'ChatMessage' }
      & ChatMessageFragment
    )> } };


export const CreateChatMessageProcessorDocument = gql`
    mutation createChatMessageProcessor($data: ChatMessageCreateInput!) {
  response: createChatMessageProcessor(data: $data) {
    success
    message
    errors {
      key
      message
    }
    data {
      ...chatMessage_
    }
  }
}
    ${ChatMessageFragmentDoc}`;
export type CreateChatMessageProcessorMutationFn = Apollo.MutationFunction<CreateChatMessageProcessorMutation, CreateChatMessageProcessorMutationVariables>;

/**
 * __useCreateChatMessageProcessorMutation__
 *
 * To run a mutation, you first call `useCreateChatMessageProcessorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMessageProcessorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMessageProcessorMutation, { data, loading, error }] = useCreateChatMessageProcessorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateChatMessageProcessorMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMessageProcessorMutation, CreateChatMessageProcessorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMessageProcessorMutation, CreateChatMessageProcessorMutationVariables>(CreateChatMessageProcessorDocument, options);
      }
export type CreateChatMessageProcessorMutationHookResult = ReturnType<typeof useCreateChatMessageProcessorMutation>;
export type CreateChatMessageProcessorMutationResult = Apollo.MutationResult<CreateChatMessageProcessorMutation>;
export type CreateChatMessageProcessorMutationOptions = Apollo.BaseMutationOptions<CreateChatMessageProcessorMutation, CreateChatMessageProcessorMutationVariables>;