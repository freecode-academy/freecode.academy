/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type OpenAiMutationVariables = Types.Exact<{
  query: Types.Scalars['String'];
}>;


export type OpenAiMutation = { __typename?: 'Mutation', openAi?: Types.Maybe<string> };


export const OpenAiDocument = gql`
    mutation openAi($query: String!) {
  openAi(query: $query)
}
    `;
export type OpenAiMutationFn = Apollo.MutationFunction<OpenAiMutation, OpenAiMutationVariables>;

/**
 * __useOpenAiMutation__
 *
 * To run a mutation, you first call `useOpenAiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpenAiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [openAiMutation, { data, loading, error }] = useOpenAiMutation({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useOpenAiMutation(baseOptions?: Apollo.MutationHookOptions<OpenAiMutation, OpenAiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OpenAiMutation, OpenAiMutationVariables>(OpenAiDocument, options);
      }
export type OpenAiMutationHookResult = ReturnType<typeof useOpenAiMutation>;
export type OpenAiMutationResult = Apollo.MutationResult<OpenAiMutation>;
export type OpenAiMutationOptions = Apollo.BaseMutationOptions<OpenAiMutation, OpenAiMutationVariables>;