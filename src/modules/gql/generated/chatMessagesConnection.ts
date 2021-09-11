/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ChatMessageFragment } from './chatMessage_';
import { gql } from '@apollo/client';
import { ChatMessageFragmentDoc } from './chatMessage_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ChatMessagesConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.ChatMessageWhereInput>;
  orderBy?: Types.Maybe<Array<Types.ChatMessageOrderByInput> | Types.ChatMessageOrderByInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ChatMessagesConnectionQuery = { __typename?: 'Query', chatMessagesCount: number, chatMessages: Array<(
    { __typename?: 'ChatMessage' }
    & ChatMessageFragment
  )> };


export const ChatMessagesConnectionDocument = gql`
    query chatMessagesConnection($where: ChatMessageWhereInput, $orderBy: [ChatMessageOrderByInput!], $skip: Int, $first: Int = 10) {
  chatMessagesCount(where: $where)
  chatMessages(where: $where, orderBy: $orderBy, skip: $skip, take: $first) {
    ...chatMessage_
  }
}
    ${ChatMessageFragmentDoc}`;

/**
 * __useChatMessagesConnectionQuery__
 *
 * To run a query within a React component, call `useChatMessagesConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useChatMessagesConnectionQuery(baseOptions?: Apollo.QueryHookOptions<ChatMessagesConnectionQuery, ChatMessagesConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatMessagesConnectionQuery, ChatMessagesConnectionQueryVariables>(ChatMessagesConnectionDocument, options);
      }
export function useChatMessagesConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatMessagesConnectionQuery, ChatMessagesConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatMessagesConnectionQuery, ChatMessagesConnectionQueryVariables>(ChatMessagesConnectionDocument, options);
        }
export type ChatMessagesConnectionQueryHookResult = ReturnType<typeof useChatMessagesConnectionQuery>;
export type ChatMessagesConnectionLazyQueryHookResult = ReturnType<typeof useChatMessagesConnectionLazyQuery>;
export type ChatMessagesConnectionQueryResult = Apollo.QueryResult<ChatMessagesConnectionQuery, ChatMessagesConnectionQueryVariables>;