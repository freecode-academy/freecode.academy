/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeFragment } from './codeChallenge_';
import { gql } from '@apollo/client';
import { CodeChallengeFragmentDoc } from './codeChallenge_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CodeChallengesQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.CodeChallengeWhereInput>;
  orderBy?: Types.Maybe<Array<Types.CodeChallengeOrderByWithRelationInput> | Types.CodeChallengeOrderByWithRelationInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  cursor?: Types.Maybe<Types.CodeChallengeWhereUniqueInput>;
}>;


export type CodeChallengesQuery = { __typename?: 'Query', codeChallenges: Array<(
    { __typename?: 'CodeChallenge' }
    & CodeChallengeFragment
  )> };


export const CodeChallengesDocument = gql`
    query codeChallenges($where: CodeChallengeWhereInput, $orderBy: [CodeChallengeOrderByWithRelationInput!], $take: Int, $skip: Int, $cursor: CodeChallengeWhereUniqueInput) {
  codeChallenges(
    where: $where
    orderBy: $orderBy
    take: $take
    skip: $skip
    cursor: $cursor
  ) {
    ...codeChallenge_
  }
}
    ${CodeChallengeFragmentDoc}`;

/**
 * __useCodeChallengesQuery__
 *
 * To run a query within a React component, call `useCodeChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodeChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodeChallengesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useCodeChallengesQuery(baseOptions?: Apollo.QueryHookOptions<CodeChallengesQuery, CodeChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CodeChallengesQuery, CodeChallengesQueryVariables>(CodeChallengesDocument, options);
      }
export function useCodeChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CodeChallengesQuery, CodeChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CodeChallengesQuery, CodeChallengesQueryVariables>(CodeChallengesDocument, options);
        }
export type CodeChallengesQueryHookResult = ReturnType<typeof useCodeChallengesQuery>;
export type CodeChallengesLazyQueryHookResult = ReturnType<typeof useCodeChallengesLazyQuery>;
export type CodeChallengesQueryResult = Apollo.QueryResult<CodeChallengesQuery, CodeChallengesQueryVariables>;