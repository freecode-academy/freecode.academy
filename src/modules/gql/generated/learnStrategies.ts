/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { LearnStrategyFragment } from './learnStrategy_';
import { gql } from '@apollo/client';
import { LearnStrategyFragmentDoc } from './learnStrategy_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type LearnStrategiesQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.LearnStrategyWhereInput>;
  orderBy?: Types.Maybe<Array<Types.LearnStrategyOrderByWithRelationInput> | Types.LearnStrategyOrderByWithRelationInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type LearnStrategiesQuery = { __typename?: 'Query', learnStrategies: Array<(
    { __typename?: 'LearnStrategy' }
    & LearnStrategyFragment
  )> };


export const LearnStrategiesDocument = gql`
    query learnStrategies($where: LearnStrategyWhereInput, $orderBy: [LearnStrategyOrderByWithRelationInput!], $take: Int, $skip: Int) {
  learnStrategies(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...learnStrategy_
  }
}
    ${LearnStrategyFragmentDoc}`;

/**
 * __useLearnStrategiesQuery__
 *
 * To run a query within a React component, call `useLearnStrategiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearnStrategiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLearnStrategiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useLearnStrategiesQuery(baseOptions?: Apollo.QueryHookOptions<LearnStrategiesQuery, LearnStrategiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LearnStrategiesQuery, LearnStrategiesQueryVariables>(LearnStrategiesDocument, options);
      }
export function useLearnStrategiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LearnStrategiesQuery, LearnStrategiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LearnStrategiesQuery, LearnStrategiesQueryVariables>(LearnStrategiesDocument, options);
        }
export type LearnStrategiesQueryHookResult = ReturnType<typeof useLearnStrategiesQuery>;
export type LearnStrategiesLazyQueryHookResult = ReturnType<typeof useLearnStrategiesLazyQuery>;
export type LearnStrategiesQueryResult = Apollo.QueryResult<LearnStrategiesQuery, LearnStrategiesQueryVariables>;