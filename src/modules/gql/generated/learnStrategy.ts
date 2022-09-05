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
export type LearnStrategyQueryVariables = Types.Exact<{
  where: Types.LearnStrategyWhereUniqueInput;
}>;


export type LearnStrategyQuery = { __typename?: 'Query', learnStrategy?: Types.Maybe<(
    { __typename?: 'LearnStrategy' }
    & LearnStrategyFragment
  )> };


export const LearnStrategyDocument = gql`
    query learnStrategy($where: LearnStrategyWhereUniqueInput!) {
  learnStrategy(where: $where) {
    ...learnStrategy_
  }
}
    ${LearnStrategyFragmentDoc}`;

/**
 * __useLearnStrategyQuery__
 *
 * To run a query within a React component, call `useLearnStrategyQuery` and pass it any options that fit your needs.
 * When your component renders, `useLearnStrategyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLearnStrategyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLearnStrategyQuery(baseOptions: Apollo.QueryHookOptions<LearnStrategyQuery, LearnStrategyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LearnStrategyQuery, LearnStrategyQueryVariables>(LearnStrategyDocument, options);
      }
export function useLearnStrategyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LearnStrategyQuery, LearnStrategyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LearnStrategyQuery, LearnStrategyQueryVariables>(LearnStrategyDocument, options);
        }
export type LearnStrategyQueryHookResult = ReturnType<typeof useLearnStrategyQuery>;
export type LearnStrategyLazyQueryHookResult = ReturnType<typeof useLearnStrategyLazyQuery>;
export type LearnStrategyQueryResult = Apollo.QueryResult<LearnStrategyQuery, LearnStrategyQueryVariables>;