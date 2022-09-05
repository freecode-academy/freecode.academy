/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { MeUserFragment } from './meUser';
import { gql } from '@apollo/client';
import { MeUserFragmentDoc } from './meUser';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type MeQueryVariables = Types.Exact<{
  withMentorMentee?: Types.Maybe<Types.Scalars['Boolean']>;
  withNotificationTypes?: Types.Maybe<Types.Scalars['Boolean']>;
  withUserTechnologies?: Types.Maybe<Types.Scalars['Boolean']>;
  withCodeChallengeCompletions?: Types.Maybe<Types.Scalars['Boolean']>;
  withEducationProjects?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type MeQuery = { __typename?: 'Query', me?: Types.Maybe<(
    { __typename?: 'User' }
    & MeUserFragment
  )> };


export const MeDocument = gql`
    query me($withMentorMentee: Boolean = true, $withNotificationTypes: Boolean = true, $withUserTechnologies: Boolean = true, $withCodeChallengeCompletions: Boolean = true, $withEducationProjects: Boolean = false) {
  me {
    ...meUser
  }
}
    ${MeUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      withMentorMentee: // value for 'withMentorMentee'
 *      withNotificationTypes: // value for 'withNotificationTypes'
 *      withUserTechnologies: // value for 'withUserTechnologies'
 *      withCodeChallengeCompletions: // value for 'withCodeChallengeCompletions'
 *      withEducationProjects: // value for 'withEducationProjects'
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;