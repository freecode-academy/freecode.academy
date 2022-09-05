/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TopicsConnectionTopicFragment } from './topicsConnectionTopic';
import { gql } from '@apollo/client';
import { TopicsConnectionTopicFragmentDoc } from './topicsConnectionTopic';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TopicsConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where?: Types.Maybe<Types.ResourceWhereInput>;
  orderBy?: Types.Maybe<Array<Types.ResourceOrderByWithRelationInput> | Types.ResourceOrderByWithRelationInput>;
}>;


export type TopicsConnectionQuery = { __typename?: 'Query', resourcesCount: number, resources: Array<(
    { __typename?: 'Resource' }
    & TopicsConnectionTopicFragment
  )> };


export const TopicsConnectionDocument = gql`
    query topicsConnection($first: Int = 10, $skip: Int, $where: ResourceWhereInput, $orderBy: [ResourceOrderByWithRelationInput!] = {createdAt: desc}) {
  resourcesCount(where: $where)
  resources(orderBy: $orderBy, take: $first, skip: $skip, where: $where) {
    ...topicsConnectionTopic
  }
}
    ${TopicsConnectionTopicFragmentDoc}`;

/**
 * __useTopicsConnectionQuery__
 *
 * To run a query within a React component, call `useTopicsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTopicsConnectionQuery(baseOptions?: Apollo.QueryHookOptions<TopicsConnectionQuery, TopicsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopicsConnectionQuery, TopicsConnectionQueryVariables>(TopicsConnectionDocument, options);
      }
export function useTopicsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopicsConnectionQuery, TopicsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopicsConnectionQuery, TopicsConnectionQueryVariables>(TopicsConnectionDocument, options);
        }
export type TopicsConnectionQueryHookResult = ReturnType<typeof useTopicsConnectionQuery>;
export type TopicsConnectionLazyQueryHookResult = ReturnType<typeof useTopicsConnectionLazyQuery>;
export type TopicsConnectionQueryResult = Apollo.QueryResult<TopicsConnectionQuery, TopicsConnectionQueryVariables>;