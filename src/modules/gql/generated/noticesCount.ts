/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type NoticesCountQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.NoticeWhereInput>;
}>;


export type NoticesCountQuery = { __typename?: 'Query', noticesCount: number };


export const NoticesCountDocument = gql`
    query noticesCount($where: NoticeWhereInput) {
  noticesCount(where: $where)
}
    `;

/**
 * __useNoticesCountQuery__
 *
 * To run a query within a React component, call `useNoticesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticesCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useNoticesCountQuery(baseOptions?: Apollo.QueryHookOptions<NoticesCountQuery, NoticesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoticesCountQuery, NoticesCountQueryVariables>(NoticesCountDocument, options);
      }
export function useNoticesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticesCountQuery, NoticesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoticesCountQuery, NoticesCountQueryVariables>(NoticesCountDocument, options);
        }
export type NoticesCountQueryHookResult = ReturnType<typeof useNoticesCountQuery>;
export type NoticesCountLazyQueryHookResult = ReturnType<typeof useNoticesCountLazyQuery>;
export type NoticesCountQueryResult = Apollo.QueryResult<NoticesCountQuery, NoticesCountQueryVariables>;