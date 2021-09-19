/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TimersConnectionTimerFragment } from './timersConnectionTimer';
import { gql } from '@apollo/client';
import { TimersConnectionTimerFragmentDoc } from './timersConnectionTimer';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TimersConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.TimerWhereInput>;
  orderBy?: Types.Maybe<Array<Types.TimerOrderByInput> | Types.TimerOrderByInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type TimersConnectionQuery = { __typename?: 'Query', timersCount: number, timers: Array<(
    { __typename?: 'Timer' }
    & TimersConnectionTimerFragment
  )> };


export const TimersConnectionDocument = gql`
    query timersConnection($where: TimerWhereInput, $orderBy: [TimerOrderByInput!] = {createdAt: desc}, $skip: Int, $first: Int) {
  timersCount(where: $where)
  timers(where: $where, orderBy: $orderBy, skip: $skip, take: $first) {
    ...timersConnectionTimer
  }
}
    ${TimersConnectionTimerFragmentDoc}`;

/**
 * __useTimersConnectionQuery__
 *
 * To run a query within a React component, call `useTimersConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimersConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimersConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useTimersConnectionQuery(baseOptions?: Apollo.QueryHookOptions<TimersConnectionQuery, TimersConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimersConnectionQuery, TimersConnectionQueryVariables>(TimersConnectionDocument, options);
      }
export function useTimersConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimersConnectionQuery, TimersConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimersConnectionQuery, TimersConnectionQueryVariables>(TimersConnectionDocument, options);
        }
export type TimersConnectionQueryHookResult = ReturnType<typeof useTimersConnectionQuery>;
export type TimersConnectionLazyQueryHookResult = ReturnType<typeof useTimersConnectionLazyQuery>;
export type TimersConnectionQueryResult = Apollo.QueryResult<TimersConnectionQuery, TimersConnectionQueryVariables>;