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
const defaultOptions =  {}
export type OfficeProjectsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.ProjectWhereInput>;
}>;


export type OfficeProjectsQuery = { __typename?: 'Query', projectsCount: number, projects: Array<(
    { __typename?: 'Project' }
    & OfficeProjectFragment
  )> };


export const OfficeProjectsDocument = gql`
    query officeProjects($where: ProjectWhereInput) {
  projectsCount(where: $where)
  projects(orderBy: {updatedAt: desc}, where: $where) {
    ...officeProject
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
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOfficeProjectsQuery(baseOptions?: Apollo.QueryHookOptions<OfficeProjectsQuery, OfficeProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficeProjectsQuery, OfficeProjectsQueryVariables>(OfficeProjectsDocument, options);
      }
export function useOfficeProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficeProjectsQuery, OfficeProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficeProjectsQuery, OfficeProjectsQueryVariables>(OfficeProjectsDocument, options);
        }
export type OfficeProjectsQueryHookResult = ReturnType<typeof useOfficeProjectsQuery>;
export type OfficeProjectsLazyQueryHookResult = ReturnType<typeof useOfficeProjectsLazyQuery>;
export type OfficeProjectsQueryResult = Apollo.QueryResult<OfficeProjectsQuery, OfficeProjectsQueryVariables>;