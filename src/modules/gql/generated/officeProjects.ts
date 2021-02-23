/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { OfficeProjectFragment } from './officeProject';
import { gql } from '@apollo/client';
import { OfficeProjectFragmentDoc } from './officeProject';
import * as Apollo from '@apollo/client';
export type OfficeProjectsQueryVariables = Types.Exact<{
  currentUserId?: Types.Maybe<Types.Scalars['ID']>;
}>;


export type OfficeProjectsQuery = { __typename?: 'Query', projectsConnection: { __typename?: 'ProjectConnection', aggregate: { __typename?: 'AggregateProject', count: number }, edges: Array<Types.Maybe<{ __typename?: 'ProjectEdge', node: (
        { __typename?: 'Project' }
        & OfficeProjectFragment
      ) }>> } };


export const OfficeProjectsDocument = gql`
    query officeProjects($currentUserId: ID) {
  projectsConnection(
    orderBy: updatedAt_DESC
    where: {OR: [{CreatedBy: {id: $currentUserId}}]}
  ) {
    aggregate {
      count
    }
    edges {
      node {
        ...officeProject
      }
    }
  }
}
    ${OfficeProjectFragmentDoc}`;

/**
 * __useOfficeProjectsQuery__
 *
 * To run a query within a React component, call `useOfficeProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficeProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficeProjectsQuery({
 *   variables: {
 *      currentUserId: // value for 'currentUserId'
 *   },
 * });
 */
export function useOfficeProjectsQuery(baseOptions?: Apollo.QueryHookOptions<OfficeProjectsQuery, OfficeProjectsQueryVariables>) {
        return Apollo.useQuery<OfficeProjectsQuery, OfficeProjectsQueryVariables>(OfficeProjectsDocument, baseOptions);
      }
export function useOfficeProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficeProjectsQuery, OfficeProjectsQueryVariables>) {
          return Apollo.useLazyQuery<OfficeProjectsQuery, OfficeProjectsQueryVariables>(OfficeProjectsDocument, baseOptions);
        }
export type OfficeProjectsQueryHookResult = ReturnType<typeof useOfficeProjectsQuery>;
export type OfficeProjectsLazyQueryHookResult = ReturnType<typeof useOfficeProjectsLazyQuery>;
export type OfficeProjectsQueryResult = Apollo.QueryResult<OfficeProjectsQuery, OfficeProjectsQueryVariables>;