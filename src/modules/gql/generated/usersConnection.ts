/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UsersConnectionUserFragment } from './usersConnectionUser';
import { gql } from '@apollo/client';
import { UsersConnectionUserFragmentDoc } from './usersConnectionUser';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UsersConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.UserWhereInput>;
  orderBy?: Types.Maybe<Array<Types.UserOrderByWithRelationInput> | Types.UserOrderByWithRelationInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  first?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type UsersConnectionQuery = { __typename?: 'Query', usersCount: number, users: Array<(
    { __typename?: 'User' }
    & UsersConnectionUserFragment
  )> };


export const UsersConnectionDocument = gql`
    query usersConnection($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!] = {createdAt: asc}, $skip: Int, $first: Int = 10) {
  usersCount(where: $where)
  users(where: $where, orderBy: $orderBy, skip: $skip, take: $first) {
    ...usersConnectionUser
  }
}
    ${UsersConnectionUserFragmentDoc}`;

/**
 * __useUsersConnectionQuery__
 *
 * To run a query within a React component, call `useUsersConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useUsersConnectionQuery(baseOptions?: Apollo.QueryHookOptions<UsersConnectionQuery, UsersConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersConnectionQuery, UsersConnectionQueryVariables>(UsersConnectionDocument, options);
      }
export function useUsersConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersConnectionQuery, UsersConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersConnectionQuery, UsersConnectionQueryVariables>(UsersConnectionDocument, options);
        }
export type UsersConnectionQueryHookResult = ReturnType<typeof useUsersConnectionQuery>;
export type UsersConnectionLazyQueryHookResult = ReturnType<typeof useUsersConnectionLazyQuery>;
export type UsersConnectionQueryResult = Apollo.QueryResult<UsersConnectionQuery, UsersConnectionQueryVariables>;