/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { MainPageCodeChallengeCompletionFragment } from './mainPageCodeChallengeCompletion';
import { Resource_Fragment } from './resource_';
import { TasksConnectionTaskFragment } from './tasksConnectionTask';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { MainPageCodeChallengeCompletionFragmentDoc } from './mainPageCodeChallengeCompletion';
import { Resource_FragmentDoc } from './resource_';
import { TasksConnectionTaskFragmentDoc } from './tasksConnectionTask';
import * as Apollo from '@apollo/client';
export type MainPageQueryVariables = Types.Exact<{
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
}>;


export type MainPageQuery = { __typename?: 'Query', students: Array<Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>>, codeChallengeCompletions: Array<Types.Maybe<(
    { __typename?: 'CodeChallengeCompletion' }
    & MainPageCodeChallengeCompletionFragment
  )>>, comments: Array<Types.Maybe<(
    { __typename?: 'Resource' }
    & Resource_Fragment
  )>>, tasksNeedHelp: { __typename?: 'TaskConnection', aggregate: { __typename?: 'AggregateTask', count: number }, edges: Array<Types.Maybe<{ __typename?: 'TaskEdge', node: (
        { __typename?: 'Task' }
        & TasksConnectionTaskFragment
      ) }>> } };


export const MainPageDocument = gql`
    query mainPage($timersWhere: TimerWhereInput) {
  students: users(
    first: 4
    orderBy: createdAt_DESC
    where: {ProjectsCreated_some: {type: Education}}
  ) {
    ...UserNoNesting
  }
  codeChallengeCompletions(
    orderBy: createdAt_DESC
    first: 3
    where: {Task: {status: Completed}}
  ) {
    ...mainPageCodeChallengeCompletion
  }
  comments: resources(first: 5, orderBy: createdAt_DESC, where: {type: Comment}) {
    ...resource_
  }
  tasksNeedHelp: tasksConnection(
    where: {needHelp: true, status_not_in: [Completed]}
    orderBy: createdAt_DESC
    first: 3
  ) {
    aggregate {
      count
    }
    edges {
      node {
        ...tasksConnectionTask
      }
    }
  }
}
    ${UserNoNestingFragmentDoc}
${MainPageCodeChallengeCompletionFragmentDoc}
${Resource_FragmentDoc}
${TasksConnectionTaskFragmentDoc}`;

/**
 * __useMainPageQuery__
 *
 * To run a query within a React component, call `useMainPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainPageQuery({
 *   variables: {
 *      timersWhere: // value for 'timersWhere'
 *   },
 * });
 */
export function useMainPageQuery(baseOptions?: Apollo.QueryHookOptions<MainPageQuery, MainPageQueryVariables>) {
        return Apollo.useQuery<MainPageQuery, MainPageQueryVariables>(MainPageDocument, baseOptions);
      }
export function useMainPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainPageQuery, MainPageQueryVariables>) {
          return Apollo.useLazyQuery<MainPageQuery, MainPageQueryVariables>(MainPageDocument, baseOptions);
        }
export type MainPageQueryHookResult = ReturnType<typeof useMainPageQuery>;
export type MainPageLazyQueryHookResult = ReturnType<typeof useMainPageLazyQuery>;
export type MainPageQueryResult = Apollo.QueryResult<MainPageQuery, MainPageQueryVariables>;