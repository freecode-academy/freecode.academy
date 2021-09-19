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
export type ChatMessageQueryVariables = Types.Exact<{
  where: Types.ChatMessageWhereUniqueInput;
}>;


export type ChatMessageQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'ChatMessage' }
    & ChatMessageFragment
  )> };


export const ChatMessageDocument = gql`
    query chatMessage($where: ChatMessageWhereUniqueInput!) {
  object: chatMessage(where: $where) {
    ...chatMessage_
  }
}
    ${ChatMessageFragmentDoc}`;

/**
 * __useChatMessageQuery__
 *
 * To run a query within a React component, call `useChatMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessageQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useChatMessageQuery(baseOptions: Apollo.QueryHookOptions<ChatMessageQuery, ChatMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatMessageQuery, ChatMessageQueryVariables>(ChatMessageDocument, options);
      }
export function useChatMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatMessageQuery, ChatMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatMessageQuery, ChatMessageQueryVariables>(ChatMessageDocument, options);
        }
export type ChatMessageQueryHookResult = ReturnType<typeof useChatMessageQuery>;
export type ChatMessageLazyQueryHookResult = ReturnType<typeof useChatMessageLazyQuery>;
export type ChatMessageQueryResult = Apollo.QueryResult<ChatMessageQuery, ChatMessageQueryVariables>;