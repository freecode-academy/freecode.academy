/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologiesConnectionTechnologyFragment } from './technologiesConnectionTechnology';
import { gql } from '@apollo/client';
import { TechnologiesConnectionTechnologyFragmentDoc } from './technologiesConnectionTechnology';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TechnologiesConnectionQueryVariables = Types.Exact<{
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where?: Types.Maybe<Types.TechnologyWhereInput>;
  orderBy?: Types.Maybe<Array<Types.TechnologyOrderByInput> | Types.TechnologyOrderByInput>;
}>;


export type TechnologiesConnectionQuery = { __typename?: 'Query', technologiesCount: number, technologies: Array<(
    { __typename?: 'Technology' }
    & TechnologiesConnectionTechnologyFragment
  )> };


export const TechnologiesConnectionDocument = gql`
    query technologiesConnection($take: Int, $skip: Int, $where: TechnologyWhereInput, $orderBy: [TechnologyOrderByInput!] = {createdAt: desc}) {
  technologiesCount(where: $where)
  technologies(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {
    ...technologiesConnectionTechnology
  }
}
    ${TechnologiesConnectionTechnologyFragmentDoc}`;

/**
 * __useTechnologiesConnectionQuery__
 *
 * To run a query within a React component, call `useTechnologiesConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechnologiesConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechnologiesConnectionQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTechnologiesConnectionQuery(baseOptions?: Apollo.QueryHookOptions<TechnologiesConnectionQuery, TechnologiesConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechnologiesConnectionQuery, TechnologiesConnectionQueryVariables>(TechnologiesConnectionDocument, options);
      }
export function useTechnologiesConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechnologiesConnectionQuery, TechnologiesConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechnologiesConnectionQuery, TechnologiesConnectionQueryVariables>(TechnologiesConnectionDocument, options);
        }
export type TechnologiesConnectionQueryHookResult = ReturnType<typeof useTechnologiesConnectionQuery>;
export type TechnologiesConnectionLazyQueryHookResult = ReturnType<typeof useTechnologiesConnectionLazyQuery>;
export type TechnologiesConnectionQueryResult = Apollo.QueryResult<TechnologiesConnectionQuery, TechnologiesConnectionQueryVariables>;