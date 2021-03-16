/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ProjectFragment } from './project_';
import { gql } from '@apollo/client';
import { ProjectFragmentDoc } from './project_';
import * as Apollo from '@apollo/client';
export type ProjectPageProjectsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.ProjectWhereInput>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
}>;


export type ProjectPageProjectsQuery = { __typename?: 'Query', projects: Array<Types.Maybe<(
    { __typename?: 'Project' }
    & ProjectFragment
  )>> };


export const ProjectPageProjectsDocument = gql`
    query projectPageProjects($where: ProjectWhereInput, $first: Int = 1, $timersWhere: TimerWhereInput) {
  projects(where: $where, first: $first) {
    ...project_
  }
}
    ${ProjectFragmentDoc}`;

/**
 * __useProjectPageProjectsQuery__
 *
 * To run a query within a React component, call `useProjectPageProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectPageProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectPageProjectsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      first: // value for 'first'
 *      timersWhere: // value for 'timersWhere'
 *   },
 * });
 */
export function useProjectPageProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectPageProjectsQuery, ProjectPageProjectsQueryVariables>) {
        return Apollo.useQuery<ProjectPageProjectsQuery, ProjectPageProjectsQueryVariables>(ProjectPageProjectsDocument, baseOptions);
      }
export function useProjectPageProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectPageProjectsQuery, ProjectPageProjectsQueryVariables>) {
          return Apollo.useLazyQuery<ProjectPageProjectsQuery, ProjectPageProjectsQueryVariables>(ProjectPageProjectsDocument, baseOptions);
        }
export type ProjectPageProjectsQueryHookResult = ReturnType<typeof useProjectPageProjectsQuery>;
export type ProjectPageProjectsLazyQueryHookResult = ReturnType<typeof useProjectPageProjectsLazyQuery>;
export type ProjectPageProjectsQueryResult = Apollo.QueryResult<ProjectPageProjectsQuery, ProjectPageProjectsQueryVariables>;