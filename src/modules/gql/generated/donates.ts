/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { DonateFragment } from './donate_';
import { gql } from '@apollo/client';
import { DonateFragmentDoc } from './donate_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type DonatesQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.DonateWhereInput>;
  orderBy?: Types.Maybe<Array<Types.DonateOrderByInput> | Types.DonateOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type DonatesQuery = { __typename?: 'Query', donates: Array<(
    { __typename?: 'Donate' }
    & DonateFragment
  )> };


export const DonatesDocument = gql`
    query donates($where: DonateWhereInput, $orderBy: [DonateOrderByInput!], $take: Int, $skip: Int) {
  donates(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...donate_
  }
}
    ${DonateFragmentDoc}`;

/**
 * __useDonatesQuery__
 *
 * To run a query within a React component, call `useDonatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDonatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDonatesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useDonatesQuery(baseOptions?: Apollo.QueryHookOptions<DonatesQuery, DonatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DonatesQuery, DonatesQueryVariables>(DonatesDocument, options);
      }
export function useDonatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DonatesQuery, DonatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DonatesQuery, DonatesQueryVariables>(DonatesDocument, options);
        }
export type DonatesQueryHookResult = ReturnType<typeof useDonatesQuery>;
export type DonatesLazyQueryHookResult = ReturnType<typeof useDonatesLazyQuery>;
export type DonatesQueryResult = Apollo.QueryResult<DonatesQuery, DonatesQueryVariables>;