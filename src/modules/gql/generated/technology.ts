/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TechnologyFragment } from './technology_';
import { gql } from '@apollo/client';
import { TechnologyFragmentDoc } from './technology_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TechnologyQueryVariables = Types.Exact<{
  where: Types.TechnologyWhereUniqueInput;
  withLearnStrategies?: Types.Scalars['Boolean'];
}>;


export type TechnologyQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'Technology' }
    & TechnologyFragment
  )> };


export const TechnologyDocument = gql`
    query technology($where: TechnologyWhereUniqueInput!, $withLearnStrategies: Boolean! = false) {
  object: technology(where: $where) {
    ...technology_
  }
}
    ${TechnologyFragmentDoc}`;

/**
 * __useTechnologyQuery__
 *
 * To run a query within a React component, call `useTechnologyQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechnologyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechnologyQuery({
 *   variables: {
 *      where: // value for 'where'
 *      withLearnStrategies: // value for 'withLearnStrategies'
 *   },
 * });
 */
export function useTechnologyQuery(baseOptions: Apollo.QueryHookOptions<TechnologyQuery, TechnologyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechnologyQuery, TechnologyQueryVariables>(TechnologyDocument, options);
      }
export function useTechnologyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechnologyQuery, TechnologyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechnologyQuery, TechnologyQueryVariables>(TechnologyDocument, options);
        }
export type TechnologyQueryHookResult = ReturnType<typeof useTechnologyQuery>;
export type TechnologyLazyQueryHookResult = ReturnType<typeof useTechnologyLazyQuery>;
export type TechnologyQueryResult = Apollo.QueryResult<TechnologyQuery, TechnologyQueryVariables>;