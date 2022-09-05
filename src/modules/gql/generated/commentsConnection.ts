/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CommentsConnectionCommentFragment } from './commentsConnectionComment';
import { gql } from '@apollo/client';
import { CommentsConnectionCommentFragmentDoc } from './commentsConnectionComment';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CommentsConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where?: Types.Maybe<Types.ResourceWhereInput>;
  orderBy?: Types.Maybe<Array<Types.ResourceOrderByWithRelationInput> | Types.ResourceOrderByWithRelationInput>;
}>;


export type CommentsConnectionQuery = { __typename?: 'Query', resourcesCount: number, resources: Array<(
    { __typename?: 'Resource' }
    & CommentsConnectionCommentFragment
  )> };


export const CommentsConnectionDocument = gql`
    query commentsConnection($first: Int = 10, $skip: Int, $where: ResourceWhereInput, $orderBy: [ResourceOrderByWithRelationInput!] = {createdAt: desc}) {
  resourcesCount(where: $where)
  resources(orderBy: $orderBy, take: $first, skip: $skip, where: $where) {
    ...commentsConnectionComment
  }
}
    ${CommentsConnectionCommentFragmentDoc}`;

/**
 * __useCommentsConnectionQuery__
 *
 * To run a query within a React component, call `useCommentsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCommentsConnectionQuery(baseOptions?: Apollo.QueryHookOptions<CommentsConnectionQuery, CommentsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, options);
      }
export function useCommentsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsConnectionQuery, CommentsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, options);
        }
export type CommentsConnectionQueryHookResult = ReturnType<typeof useCommentsConnectionQuery>;
export type CommentsConnectionLazyQueryHookResult = ReturnType<typeof useCommentsConnectionLazyQuery>;
export type CommentsConnectionQueryResult = Apollo.QueryResult<CommentsConnectionQuery, CommentsConnectionQueryVariables>;