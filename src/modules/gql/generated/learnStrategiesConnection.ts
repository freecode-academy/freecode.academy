/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { LearnStrategyFragment } from './learnStrategy_';
import { gql } from '@apollo/client';
import { LearnStrategyFragmentDoc } from './learnStrategy_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type LearnStrategiesConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.LearnStrategyWhereInput>;
  orderBy?: Types.Maybe<Array<Types.LearnStrategyOrderByInput> | Types.LearnStrategyOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type LearnStrategiesConnectionQuery = { __typename?: 'Query', learnStrategiesCount: number, learnStrategies: Array<(
    { __typename?: 'LearnStrategy' }
    & LearnStrategyFragment
  )> };


export const LearnStrategiesConnectionDocument = gql`
    query learnStrategiesConnection($where: LearnStrategyWhereInput, $orderBy: [LearnStrategyOrderByInput!], $take: Int, $skip: Int) {
  learnStrategiesCount(where: $where)
  learnStrategies(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...learnStrategy_
  }
}
    ${LearnStrategyFragmentDoc}`;

/**
 * __useLearnStrategiesConnectionQuery__
 *
 * To run a query within a React component, call `useLearnStrategiesConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearnStrategiesConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLearnStrategiesConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useLearnStrategiesConnectionQuery(baseOptions?: Apollo.QueryHookOptions<LearnStrategiesConnectionQuery, LearnStrategiesConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LearnStrategiesConnectionQuery, LearnStrategiesConnectionQueryVariables>(LearnStrategiesConnectionDocument, options);
      }
export function useLearnStrategiesConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LearnStrategiesConnectionQuery, LearnStrategiesConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LearnStrategiesConnectionQuery, LearnStrategiesConnectionQueryVariables>(LearnStrategiesConnectionDocument, options);
        }
export type LearnStrategiesConnectionQueryHookResult = ReturnType<typeof useLearnStrategiesConnectionQuery>;
export type LearnStrategiesConnectionLazyQueryHookResult = ReturnType<typeof useLearnStrategiesConnectionLazyQuery>;
export type LearnStrategiesConnectionQueryResult = Apollo.QueryResult<LearnStrategiesConnectionQuery, LearnStrategiesConnectionQueryVariables>;