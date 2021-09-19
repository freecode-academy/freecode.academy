/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SitemapResourcesConnectionQueryVariables = Types.Exact<{
  first: Types.Scalars['Int'];
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where: Types.ResourceWhereInput;
  orderBy: Array<Types.ResourceOrderByInput> | Types.ResourceOrderByInput;
}>;


export type SitemapResourcesConnectionQuery = { __typename?: 'Query', resourcesCount: number, resources: Array<{ __typename?: 'Resource', id: string, type?: Types.Maybe<Types.ResourceType>, uri: string, updatedAt: globalThis.Date }> };


export const SitemapResourcesConnectionDocument = gql`
    query sitemapResourcesConnection($first: Int!, $skip: Int, $where: ResourceWhereInput!, $orderBy: [ResourceOrderByInput!]!) {
  resourcesCount(where: $where)
  resources(take: $first, skip: $skip, where: $where, orderBy: $orderBy) {
    id
    type
    uri
    updatedAt
  }
}
    `;

/**
 * __useSitemapResourcesConnectionQuery__
 *
 * To run a query within a React component, call `useSitemapResourcesConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitemapResourcesConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitemapResourcesConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSitemapResourcesConnectionQuery(baseOptions: Apollo.QueryHookOptions<SitemapResourcesConnectionQuery, SitemapResourcesConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SitemapResourcesConnectionQuery, SitemapResourcesConnectionQueryVariables>(SitemapResourcesConnectionDocument, options);
      }
export function useSitemapResourcesConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitemapResourcesConnectionQuery, SitemapResourcesConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SitemapResourcesConnectionQuery, SitemapResourcesConnectionQueryVariables>(SitemapResourcesConnectionDocument, options);
        }
export type SitemapResourcesConnectionQueryHookResult = ReturnType<typeof useSitemapResourcesConnectionQuery>;
export type SitemapResourcesConnectionLazyQueryHookResult = ReturnType<typeof useSitemapResourcesConnectionLazyQuery>;
export type SitemapResourcesConnectionQueryResult = Apollo.QueryResult<SitemapResourcesConnectionQuery, SitemapResourcesConnectionQueryVariables>;