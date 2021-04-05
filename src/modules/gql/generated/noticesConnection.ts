/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { NoticeFragment } from './notice';
import { gql } from '@apollo/client';
import { NoticeFragmentDoc } from './notice';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type NoticesConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.NoticeWhereInput>;
  orderBy?: Types.Maybe<Types.NoticeOrderByInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  last?: Types.Maybe<Types.Scalars['Int']>;
  getNodes?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type NoticesConnectionQuery = { __typename?: 'Query', objectsConnection: { __typename?: 'NoticeConnection', aggregate: { __typename?: 'AggregateNotice', count: number }, edges?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'NoticeEdge', node: (
        { __typename?: 'Notice' }
        & NoticeFragment
      ) }>>> } };


export const NoticesConnectionDocument = gql`
    query noticesConnection($where: NoticeWhereInput, $orderBy: NoticeOrderByInput, $skip: Int, $first: Int, $last: Int, $getNodes: Boolean = true) {
  objectsConnection: noticesConnection(
    where: $where
    orderBy: $orderBy
    skip: $skip
    first: $first
    last: $last
  ) {
    aggregate {
      count
    }
    edges @include(if: $getNodes) {
      node {
        ...notice
      }
    }
  }
}
    ${NoticeFragmentDoc}`;

/**
 * __useNoticesConnectionQuery__
 *
 * To run a query within a React component, call `useNoticesConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticesConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticesConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      getNodes: // value for 'getNodes'
 *   },
 * });
 */
export function useNoticesConnectionQuery(baseOptions?: Apollo.QueryHookOptions<NoticesConnectionQuery, NoticesConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoticesConnectionQuery, NoticesConnectionQueryVariables>(NoticesConnectionDocument, options);
      }
export function useNoticesConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticesConnectionQuery, NoticesConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoticesConnectionQuery, NoticesConnectionQueryVariables>(NoticesConnectionDocument, options);
        }
export type NoticesConnectionQueryHookResult = ReturnType<typeof useNoticesConnectionQuery>;
export type NoticesConnectionLazyQueryHookResult = ReturnType<typeof useNoticesConnectionLazyQuery>;
export type NoticesConnectionQueryResult = Apollo.QueryResult<NoticesConnectionQuery, NoticesConnectionQueryVariables>;