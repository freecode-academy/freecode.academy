/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ProjectFragment } from './project_';
import { gql } from '@apollo/client';
import { ProjectFragmentDoc } from './project_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ProjectsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.ProjectWhereInput>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<(
    { __typename?: 'Project' }
    & ProjectFragment
  )> };


export const ProjectsDocument = gql`
    query projects($where: ProjectWhereInput, $first: Int, $timersWhere: TimerWhereInput) {
  projects(where: $where, take: $first) {
    ...project_
  }
}
    ${ProjectFragmentDoc}`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      first: // value for 'first'
 *      timersWhere: // value for 'timersWhere'
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;