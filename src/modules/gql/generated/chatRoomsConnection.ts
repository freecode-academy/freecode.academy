/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ChatRoomsConnectionChatRoomFragment } from './chatRoomsConnectionChatRoom';
import { gql } from '@apollo/client';
import { ChatRoomsConnectionChatRoomFragmentDoc } from './chatRoomsConnectionChatRoom';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ChatRoomsConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.ChatRoomWhereInput>;
  orderBy?: Types.Maybe<Array<Types.ChatRoomOrderByWithRelationInput> | Types.ChatRoomOrderByWithRelationInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ChatRoomsConnectionQuery = { __typename?: 'Query', count: number, chatRooms: Array<(
    { __typename?: 'ChatRoom' }
    & ChatRoomsConnectionChatRoomFragment
  )> };


export const ChatRoomsConnectionDocument = gql`
    query chatRoomsConnection($where: ChatRoomWhereInput, $orderBy: [ChatRoomOrderByWithRelationInput!], $skip: Int, $first: Int = 10) {
  chatRooms(where: $where, orderBy: $orderBy, take: $first, skip: $skip) {
    ...chatRoomsConnectionChatRoom
  }
  count: chatRoomsCount(where: $where)
}
    ${ChatRoomsConnectionChatRoomFragmentDoc}`;

/**
 * __useChatRoomsConnectionQuery__
 *
 * To run a query within a React component, call `useChatRoomsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomsConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useChatRoomsConnectionQuery(baseOptions?: Apollo.QueryHookOptions<ChatRoomsConnectionQuery, ChatRoomsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatRoomsConnectionQuery, ChatRoomsConnectionQueryVariables>(ChatRoomsConnectionDocument, options);
      }
export function useChatRoomsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRoomsConnectionQuery, ChatRoomsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatRoomsConnectionQuery, ChatRoomsConnectionQueryVariables>(ChatRoomsConnectionDocument, options);
        }
export type ChatRoomsConnectionQueryHookResult = ReturnType<typeof useChatRoomsConnectionQuery>;
export type ChatRoomsConnectionLazyQueryHookResult = ReturnType<typeof useChatRoomsConnectionLazyQuery>;
export type ChatRoomsConnectionQueryResult = Apollo.QueryResult<ChatRoomsConnectionQuery, ChatRoomsConnectionQueryVariables>;