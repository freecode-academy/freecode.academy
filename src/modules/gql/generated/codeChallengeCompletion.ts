/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeCompletionFragment } from './codeChallengeCompletion_';
import { gql } from '@apollo/client';
import { CodeChallengeCompletionFragmentDoc } from './codeChallengeCompletion_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CodeChallengeCompletionQueryVariables = Types.Exact<{
  where: Types.CodeChallengeCompletionWhereUniqueInput;
}>;


export type CodeChallengeCompletionQuery = { __typename?: 'Query', codeChallengeCompletion?: Types.Maybe<(
    { __typename?: 'CodeChallengeCompletion' }
    & CodeChallengeCompletionFragment
  )> };


export const CodeChallengeCompletionDocument = gql`
    query codeChallengeCompletion($where: CodeChallengeCompletionWhereUniqueInput!) {
  codeChallengeCompletion(where: $where) {
    ...codeChallengeCompletion_
  }
}
    ${CodeChallengeCompletionFragmentDoc}`;

/**
 * __useCodeChallengeCompletionQuery__
 *
 * To run a query within a React component, call `useCodeChallengeCompletionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodeChallengeCompletionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodeChallengeCompletionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCodeChallengeCompletionQuery(baseOptions: Apollo.QueryHookOptions<CodeChallengeCompletionQuery, CodeChallengeCompletionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CodeChallengeCompletionQuery, CodeChallengeCompletionQueryVariables>(CodeChallengeCompletionDocument, options);
      }
export function useCodeChallengeCompletionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CodeChallengeCompletionQuery, CodeChallengeCompletionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CodeChallengeCompletionQuery, CodeChallengeCompletionQueryVariables>(CodeChallengeCompletionDocument, options);
        }
export type CodeChallengeCompletionQueryHookResult = ReturnType<typeof useCodeChallengeCompletionQuery>;
export type CodeChallengeCompletionLazyQueryHookResult = ReturnType<typeof useCodeChallengeCompletionLazyQuery>;
export type CodeChallengeCompletionQueryResult = Apollo.QueryResult<CodeChallengeCompletionQuery, CodeChallengeCompletionQueryVariables>;