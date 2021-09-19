/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TaskFragment } from './task_';
import { UserNoNestingFragment } from './UserNoNesting';
import { TimersConnectionTimerFragment } from './timersConnectionTimer';
import { CodeChallengeWithBlocksFragment } from './codeChallengeWithBlocks_';
import { TaskTaskTechnologiesFragment } from './taskTaskTechnologies';
import { ResourceNoNestingFragment } from './ResourceNoNesting';
import { gql } from '@apollo/client';
import { TaskFragmentDoc } from './task_';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TimersConnectionTimerFragmentDoc } from './timersConnectionTimer';
import { CodeChallengeWithBlocksFragmentDoc } from './codeChallengeWithBlocks_';
import { TaskTaskTechnologiesFragmentDoc } from './taskTaskTechnologies';
import { ResourceNoNestingFragmentDoc } from './ResourceNoNesting';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TaskQueryVariables = Types.Exact<{
  where: Types.TaskWhereUniqueInput;
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
}>;


export type TaskQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'Task', Timers?: Types.Maybe<Array<(
      { __typename?: 'Timer' }
      & TimersConnectionTimerFragment
    )>>, CodeChallengeCompletion?: Types.Maybe<{ __typename?: 'CodeChallengeCompletion', id: string, CodeChallenge?: Types.Maybe<(
        { __typename?: 'CodeChallenge' }
        & CodeChallengeWithBlocksFragment
      )> }>, Comments?: Types.Maybe<Array<(
      { __typename?: 'Resource', CreatedBy?: Types.Maybe<(
        { __typename?: 'User' }
        & UserNoNestingFragment
      )> }
      & ResourceNoNestingFragment
    )>> }
    & TaskFragment
    & TaskTaskTechnologiesFragment
  )> };


export const TaskDocument = gql`
    query task($where: TaskWhereUniqueInput!, $timersWhere: TimerWhereInput) {
  object: task(where: $where) {
    ...task_
    Timers(orderBy: {createdAt: desc}, where: $timersWhere) {
      ...timersConnectionTimer
    }
    CodeChallengeCompletion {
      id
      CodeChallenge {
        ...codeChallengeWithBlocks_
      }
    }
    ...taskTaskTechnologies
    Comments(orderBy: {createdAt: asc}) {
      ...ResourceNoNesting
      CreatedBy {
        ...UserNoNesting
      }
    }
  }
}
    ${TaskFragmentDoc}
${TimersConnectionTimerFragmentDoc}
${CodeChallengeWithBlocksFragmentDoc}
${TaskTaskTechnologiesFragmentDoc}
${ResourceNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      where: // value for 'where'
 *      timersWhere: // value for 'timersWhere'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;