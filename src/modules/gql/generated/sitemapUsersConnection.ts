/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SitemapUsersConnectionQueryVariables = Types.Exact<{
  first: Types.Scalars['Int'];
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where: Types.UserWhereInput;
  orderBy: Array<Types.UserOrderByWithRelationInput> | Types.UserOrderByWithRelationInput;
}>;


export type SitemapUsersConnectionQuery = { __typename?: 'Query', usersCount: number, users: Array<{ __typename?: 'User', id: string, username?: Types.Maybe<string>, updatedAt: globalThis.Date }> };


export const SitemapUsersConnectionDocument = gql`
    query sitemapUsersConnection($first: Int!, $skip: Int, $where: UserWhereInput!, $orderBy: [UserOrderByWithRelationInput!]!) {
  usersCount(where: $where)
  users(take: $first, skip: $skip, where: $where, orderBy: $orderBy) {
    id
    username
    updatedAt
  }
}
    `;

/**
 * __useSitemapUsersConnectionQuery__
 *
 * To run a query within a React component, call `useSitemapUsersConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitemapUsersConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitemapUsersConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSitemapUsersConnectionQuery(baseOptions: Apollo.QueryHookOptions<SitemapUsersConnectionQuery, SitemapUsersConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SitemapUsersConnectionQuery, SitemapUsersConnectionQueryVariables>(SitemapUsersConnectionDocument, options);
      }
export function useSitemapUsersConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitemapUsersConnectionQuery, SitemapUsersConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SitemapUsersConnectionQuery, SitemapUsersConnectionQueryVariables>(SitemapUsersConnectionDocument, options);
        }
export type SitemapUsersConnectionQueryHookResult = ReturnType<typeof useSitemapUsersConnectionQuery>;
export type SitemapUsersConnectionLazyQueryHookResult = ReturnType<typeof useSitemapUsersConnectionLazyQuery>;
export type SitemapUsersConnectionQueryResult = Apollo.QueryResult<SitemapUsersConnectionQuery, SitemapUsersConnectionQueryVariables>;