/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { AuthFormUsersConnectionUserFragment } from './AuthFormUsersConnectionUser';
import { gql } from '@apollo/client';
import { AuthFormUsersConnectionUserFragmentDoc } from './AuthFormUsersConnectionUser';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type AuthFormUsersConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.UserWhereInput>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  orderBy?: Types.Maybe<Array<Types.UserOrderByWithRelationInput> | Types.UserOrderByWithRelationInput>;
}>;


export type AuthFormUsersConnectionQuery = { __typename?: 'Query', usersCount: number, users: Array<(
    { __typename?: 'User' }
    & AuthFormUsersConnectionUserFragment
  )> };


export const AuthFormUsersConnectionDocument = gql`
    query AuthFormUsersConnection($where: UserWhereInput, $first: Int = 10, $skip: Int, $orderBy: [UserOrderByWithRelationInput!]) {
  usersCount(where: $where)
  users(where: $where, take: $first, skip: $skip, orderBy: $orderBy) {
    ...AuthFormUsersConnectionUser
  }
}
    ${AuthFormUsersConnectionUserFragmentDoc}`;

/**
 * __useAuthFormUsersConnectionQuery__
 *
 * To run a query within a React component, call `useAuthFormUsersConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthFormUsersConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthFormUsersConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useAuthFormUsersConnectionQuery(baseOptions?: Apollo.QueryHookOptions<AuthFormUsersConnectionQuery, AuthFormUsersConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthFormUsersConnectionQuery, AuthFormUsersConnectionQueryVariables>(AuthFormUsersConnectionDocument, options);
      }
export function useAuthFormUsersConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthFormUsersConnectionQuery, AuthFormUsersConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthFormUsersConnectionQuery, AuthFormUsersConnectionQueryVariables>(AuthFormUsersConnectionDocument, options);
        }
export type AuthFormUsersConnectionQueryHookResult = ReturnType<typeof useAuthFormUsersConnectionQuery>;
export type AuthFormUsersConnectionLazyQueryHookResult = ReturnType<typeof useAuthFormUsersConnectionLazyQuery>;
export type AuthFormUsersConnectionQueryResult = Apollo.QueryResult<AuthFormUsersConnectionQuery, AuthFormUsersConnectionQueryVariables>;