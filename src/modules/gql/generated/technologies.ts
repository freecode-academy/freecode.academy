/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TechnologiesConnectionTechnologyFragment } from './technologiesConnectionTechnology';
import { gql } from '@apollo/client';
import { TechnologiesConnectionTechnologyFragmentDoc } from './technologiesConnectionTechnology';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TechnologiesQueryVariables = Types.Exact<{
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  where?: Types.Maybe<Types.TechnologyWhereInput>;
  orderBy?: Types.Maybe<Array<Types.TechnologyOrderByWithRelationInput> | Types.TechnologyOrderByWithRelationInput>;
}>;


export type TechnologiesQuery = { __typename?: 'Query', technologies: Array<(
    { __typename?: 'Technology' }
    & TechnologiesConnectionTechnologyFragment
  )> };


export const TechnologiesDocument = gql`
    query technologies($take: Int, $skip: Int, $where: TechnologyWhereInput, $orderBy: [TechnologyOrderByWithRelationInput!] = {createdAt: desc}) {
  technologies(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {
    ...technologiesConnectionTechnology
  }
}
    ${TechnologiesConnectionTechnologyFragmentDoc}`;

/**
 * __useTechnologiesQuery__
 *
 * To run a query within a React component, call `useTechnologiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechnologiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechnologiesQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTechnologiesQuery(baseOptions?: Apollo.QueryHookOptions<TechnologiesQuery, TechnologiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechnologiesQuery, TechnologiesQueryVariables>(TechnologiesDocument, options);
      }
export function useTechnologiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechnologiesQuery, TechnologiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechnologiesQuery, TechnologiesQueryVariables>(TechnologiesDocument, options);
        }
export type TechnologiesQueryHookResult = ReturnType<typeof useTechnologiesQuery>;
export type TechnologiesLazyQueryHookResult = ReturnType<typeof useTechnologiesLazyQuery>;
export type TechnologiesQueryResult = Apollo.QueryResult<TechnologiesQuery, TechnologiesQueryVariables>;