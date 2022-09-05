/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TasksConnectionTaskFragment } from './tasksConnectionTask';
import { gql } from '@apollo/client';
import { TasksConnectionTaskFragmentDoc } from './tasksConnectionTask';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TasksConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.TaskWhereInput>;
  orderBy?: Types.Maybe<Array<Types.TaskOrderByWithRelationInput> | Types.TaskOrderByWithRelationInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
}>;


export type TasksConnectionQuery = { __typename?: 'Query', tasksCount: number, tasks: Array<(
    { __typename?: 'Task' }
    & TasksConnectionTaskFragment
  )> };


export const TasksConnectionDocument = gql`
    query tasksConnection($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!] = {createdAt: desc}, $skip: Int, $first: Int = 10, $timersWhere: TimerWhereInput) {
  tasksCount(where: $where)
  tasks(where: $where, orderBy: $orderBy, skip: $skip, take: $first) {
    ...tasksConnectionTask
  }
}
    ${TasksConnectionTaskFragmentDoc}`;

/**
 * __useTasksConnectionQuery__
 *
 * To run a query within a React component, call `useTasksConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      timersWhere: // value for 'timersWhere'
 *   },
 * });
 */
export function useTasksConnectionQuery(baseOptions?: Apollo.QueryHookOptions<TasksConnectionQuery, TasksConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksConnectionQuery, TasksConnectionQueryVariables>(TasksConnectionDocument, options);
      }
export function useTasksConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksConnectionQuery, TasksConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksConnectionQuery, TasksConnectionQueryVariables>(TasksConnectionDocument, options);
        }
export type TasksConnectionQueryHookResult = ReturnType<typeof useTasksConnectionQuery>;
export type TasksConnectionLazyQueryHookResult = ReturnType<typeof useTasksConnectionLazyQuery>;
export type TasksConnectionQueryResult = Apollo.QueryResult<TasksConnectionQuery, TasksConnectionQueryVariables>;