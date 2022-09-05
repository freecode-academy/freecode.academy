/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { MainPageCodeChallengeCompletionFragment } from './mainPageCodeChallengeCompletion';
import { ResourceFragment } from './resource_';
import { TasksConnectionTaskFragment } from './tasksConnectionTask';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { MainPageCodeChallengeCompletionFragmentDoc } from './mainPageCodeChallengeCompletion';
import { ResourceFragmentDoc } from './resource_';
import { TasksConnectionTaskFragmentDoc } from './tasksConnectionTask';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type MainPageQueryVariables = Types.Exact<{
  timersWhere?: Types.Maybe<Types.TimerWhereInput>;
  tasksNeedHelpwhereInput?: Types.Maybe<Types.TaskWhereInput>;
}>;


export type MainPageQuery = { __typename?: 'Query', tasksNeedHelpCount: number, students: Array<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, codeChallengeCompletions: Array<(
    { __typename?: 'CodeChallengeCompletion' }
    & MainPageCodeChallengeCompletionFragment
  )>, comments: Array<(
    { __typename?: 'Resource' }
    & ResourceFragment
  )>, tasksNeedHelp: Array<(
    { __typename?: 'Task' }
    & TasksConnectionTaskFragment
  )> };


export const MainPageDocument = gql`
    query mainPage($timersWhere: TimerWhereInput, $tasksNeedHelpwhereInput: TaskWhereInput = {needHelp: {equals: true}, status: {notIn: [Completed]}}) {
  students: users(
    take: 4
    orderBy: {createdAt: desc}
    where: {Projects_ProjectToUser: {some: {type: {equals: Education}}}}
  ) {
    ...UserNoNesting
  }
  codeChallengeCompletions(
    orderBy: {createdAt: desc}
    take: 3
    where: {Task_CodeChallengeCompletionToTask: {status: {equals: Completed}}}
  ) {
    ...mainPageCodeChallengeCompletion
  }
  comments: resources(
    take: 5
    orderBy: {createdAt: desc}
    where: {type: {equals: Comment}}
  ) {
    ...resource_
  }
  tasksNeedHelpCount: tasksCount(where: $tasksNeedHelpwhereInput)
  tasksNeedHelp: tasks(
    where: $tasksNeedHelpwhereInput
    orderBy: {createdAt: desc}
    take: 3
  ) {
    ...tasksConnectionTask
  }
}
    ${UserNoNestingFragmentDoc}
${MainPageCodeChallengeCompletionFragmentDoc}
${ResourceFragmentDoc}
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
 *      tasksNeedHelpwhereInput: // value for 'tasksNeedHelpwhereInput'
 *   },
 * });
 */
export function useMainPageQuery(baseOptions?: Apollo.QueryHookOptions<MainPageQuery, MainPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MainPageQuery, MainPageQueryVariables>(MainPageDocument, options);
      }
export function useMainPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainPageQuery, MainPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MainPageQuery, MainPageQueryVariables>(MainPageDocument, options);
        }
export type MainPageQueryHookResult = ReturnType<typeof useMainPageQuery>;
export type MainPageLazyQueryHookResult = ReturnType<typeof useMainPageLazyQuery>;
export type MainPageQueryResult = Apollo.QueryResult<MainPageQuery, MainPageQueryVariables>;