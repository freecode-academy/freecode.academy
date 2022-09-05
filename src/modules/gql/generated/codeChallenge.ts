/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengePageFragment } from './CodeChallengePage';
import { gql } from '@apollo/client';
import { CodeChallengePageFragmentDoc } from './CodeChallengePage';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CodeChallengeQueryVariables = Types.Exact<{
  where: Types.CodeChallengeWhereUniqueInput;
}>;


export type CodeChallengeQuery = { __typename?: 'Query', codeChallenge?: Types.Maybe<(
    { __typename?: 'CodeChallenge' }
    & CodeChallengePageFragment
  )> };


export const CodeChallengeDocument = gql`
    query codeChallenge($where: CodeChallengeWhereUniqueInput!) {
  codeChallenge(where: $where) {
    ...CodeChallengePage
  }
}
    ${CodeChallengePageFragmentDoc}`;

/**
 * __useCodeChallengeQuery__
 *
 * To run a query within a React component, call `useCodeChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodeChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodeChallengeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCodeChallengeQuery(baseOptions: Apollo.QueryHookOptions<CodeChallengeQuery, CodeChallengeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CodeChallengeQuery, CodeChallengeQueryVariables>(CodeChallengeDocument, options);
      }
export function useCodeChallengeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CodeChallengeQuery, CodeChallengeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CodeChallengeQuery, CodeChallengeQueryVariables>(CodeChallengeDocument, options);
        }
export type CodeChallengeQueryHookResult = ReturnType<typeof useCodeChallengeQuery>;
export type CodeChallengeLazyQueryHookResult = ReturnType<typeof useCodeChallengeLazyQuery>;
export type CodeChallengeQueryResult = Apollo.QueryResult<CodeChallengeQuery, CodeChallengeQueryVariables>;