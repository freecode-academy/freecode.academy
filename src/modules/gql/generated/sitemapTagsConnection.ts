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
export type SitemapTagsConnectionQueryVariables = Types.Exact<{
  first: Types.Scalars['Int'];
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where: Types.TagWhereInput;
  orderBy: Array<Types.TagOrderByWithRelationInput> | Types.TagOrderByWithRelationInput;
}>;


export type SitemapTagsConnectionQuery = { __typename?: 'Query', tagsCount: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, updatedAt: globalThis.Date }> };


export const SitemapTagsConnectionDocument = gql`
    query sitemapTagsConnection($first: Int!, $skip: Int, $where: TagWhereInput!, $orderBy: [TagOrderByWithRelationInput!]!) {
  tagsCount(where: $where)
  tags(take: $first, skip: $skip, where: $where, orderBy: $orderBy) {
    id
    name
    updatedAt
  }
}
    `;

/**
 * __useSitemapTagsConnectionQuery__
 *
 * To run a query within a React component, call `useSitemapTagsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitemapTagsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitemapTagsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSitemapTagsConnectionQuery(baseOptions: Apollo.QueryHookOptions<SitemapTagsConnectionQuery, SitemapTagsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SitemapTagsConnectionQuery, SitemapTagsConnectionQueryVariables>(SitemapTagsConnectionDocument, options);
      }
export function useSitemapTagsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitemapTagsConnectionQuery, SitemapTagsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SitemapTagsConnectionQuery, SitemapTagsConnectionQueryVariables>(SitemapTagsConnectionDocument, options);
        }
export type SitemapTagsConnectionQueryHookResult = ReturnType<typeof useSitemapTagsConnectionQuery>;
export type SitemapTagsConnectionLazyQueryHookResult = ReturnType<typeof useSitemapTagsConnectionLazyQuery>;
export type SitemapTagsConnectionQueryResult = Apollo.QueryResult<SitemapTagsConnectionQuery, SitemapTagsConnectionQueryVariables>;