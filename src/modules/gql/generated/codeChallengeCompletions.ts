/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CodeChallengeCompletionFragment } from './codeChallengeCompletion_';
import { gql } from '@apollo/client';
import { CodeChallengeCompletionFragmentDoc } from './codeChallengeCompletion_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CodeChallengeCompletionsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.CodeChallengeCompletionWhereInput>;
  orderBy?: Types.Maybe<Array<Types.CodeChallengeCompletionOrderByInput> | Types.CodeChallengeCompletionOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type CodeChallengeCompletionsQuery = { __typename?: 'Query', codeChallengeCompletions: Array<(
    { __typename?: 'CodeChallengeCompletion' }
    & CodeChallengeCompletionFragment
  )> };


export const CodeChallengeCompletionsDocument = gql`
    query codeChallengeCompletions($where: CodeChallengeCompletionWhereInput, $orderBy: [CodeChallengeCompletionOrderByInput!], $take: Int, $skip: Int) {
  codeChallengeCompletions(
    where: $where
    orderBy: $orderBy
    take: $take
    skip: $skip
  ) {
    ...codeChallengeCompletion_
  }
}
    ${CodeChallengeCompletionFragmentDoc}`;

/**
 * __useCodeChallengeCompletionsQuery__
 *
 * To run a query within a React component, call `useCodeChallengeCompletionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodeChallengeCompletionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodeChallengeCompletionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCodeChallengeCompletionsQuery(baseOptions?: Apollo.QueryHookOptions<CodeChallengeCompletionsQuery, CodeChallengeCompletionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CodeChallengeCompletionsQuery, CodeChallengeCompletionsQueryVariables>(CodeChallengeCompletionsDocument, options);
      }
export function useCodeChallengeCompletionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CodeChallengeCompletionsQuery, CodeChallengeCompletionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CodeChallengeCompletionsQuery, CodeChallengeCompletionsQueryVariables>(CodeChallengeCompletionsDocument, options);
        }
export type CodeChallengeCompletionsQueryHookResult = ReturnType<typeof useCodeChallengeCompletionsQuery>;
export type CodeChallengeCompletionsLazyQueryHookResult = ReturnType<typeof useCodeChallengeCompletionsLazyQuery>;
export type CodeChallengeCompletionsQueryResult = Apollo.QueryResult<CodeChallengeCompletionsQuery, CodeChallengeCompletionsQueryVariables>;