/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserProfileFragment } from './userProfile';
import { gql } from '@apollo/client';
import { UserProfileFragmentDoc } from './userProfile';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UserQueryVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
  withMentorMentee?: Types.Maybe<Types.Scalars['Boolean']>;
  withNotificationTypes?: Types.Maybe<Types.Scalars['Boolean']>;
  withUserTechnologies?: Types.Maybe<Types.Scalars['Boolean']>;
  withCodeChallengeCompletions?: Types.Maybe<Types.Scalars['Boolean']>;
  withEducationProjects?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type UserQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'User' }
    & UserProfileFragment
  )> };


export const UserDocument = gql`
    query user($where: UserWhereUniqueInput!, $withMentorMentee: Boolean = true, $withNotificationTypes: Boolean = true, $withUserTechnologies: Boolean = true, $withCodeChallengeCompletions: Boolean = false, $withEducationProjects: Boolean = false) {
  object: user(where: $where) {
    ...userProfile
  }
}
    ${UserProfileFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      withMentorMentee: // value for 'withMentorMentee'
 *      withNotificationTypes: // value for 'withNotificationTypes'
 *      withUserTechnologies: // value for 'withUserTechnologies'
 *      withCodeChallengeCompletions: // value for 'withCodeChallengeCompletions'
 *      withEducationProjects: // value for 'withEducationProjects'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;