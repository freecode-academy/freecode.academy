/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { BlogsConnectionResourceFragment } from './BlogsConnectionResource';
import { gql } from '@apollo/client';
import { BlogsConnectionResourceFragmentDoc } from './BlogsConnectionResource';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type BlogsConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where?: Types.Maybe<Types.ResourceWhereInput>;
  orderBy?: Types.Maybe<Array<Types.ResourceOrderByInput> | Types.ResourceOrderByInput>;
}>;


export type BlogsConnectionQuery = { __typename?: 'Query', resourcesCount: number, resources: Array<(
    { __typename?: 'Resource' }
    & BlogsConnectionResourceFragment
  )> };


export const BlogsConnectionDocument = gql`
    query blogsConnection($first: Int = 10, $skip: Int, $where: ResourceWhereInput, $orderBy: [ResourceOrderByInput!] = {createdAt: desc}) {
  resourcesCount(where: $where)
  resources(orderBy: $orderBy, take: $first, skip: $skip, where: $where) {
    ...BlogsConnectionResource
  }
}
    ${BlogsConnectionResourceFragmentDoc}`;

/**
 * __useBlogsConnectionQuery__
 *
 * To run a query within a React component, call `useBlogsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useBlogsConnectionQuery(baseOptions?: Apollo.QueryHookOptions<BlogsConnectionQuery, BlogsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogsConnectionQuery, BlogsConnectionQueryVariables>(BlogsConnectionDocument, options);
      }
export function useBlogsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogsConnectionQuery, BlogsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogsConnectionQuery, BlogsConnectionQueryVariables>(BlogsConnectionDocument, options);
        }
export type BlogsConnectionQueryHookResult = ReturnType<typeof useBlogsConnectionQuery>;
export type BlogsConnectionLazyQueryHookResult = ReturnType<typeof useBlogsConnectionLazyQuery>;
export type BlogsConnectionQueryResult = Apollo.QueryResult<BlogsConnectionQuery, BlogsConnectionQueryVariables>;