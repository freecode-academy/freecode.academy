/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ChatMessageFragment } from './ChatMessage_';
import { gql } from '@apollo/client';
import { ChatMessageFragmentDoc } from './ChatMessage_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type DialogQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DialogQuery = { __typename?: 'Query', chatMessagesDialog: Array<(
    { __typename?: 'ChatMessage' }
    & ChatMessageFragment
  )> };


export const DialogDocument = gql`
    query dialog {
  chatMessagesDialog {
    ...ChatMessage_
  }
}
    ${ChatMessageFragmentDoc}`;

/**
 * __useDialogQuery__
 *
 * To run a query within a React component, call `useDialogQuery` and pass it any options that fit your needs.
 * When your component renders, `useDialogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDialogQuery({
 *   variables: {
 *   },
 * });
 */
export function useDialogQuery(baseOptions?: Apollo.QueryHookOptions<DialogQuery, DialogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DialogQuery, DialogQueryVariables>(DialogDocument, options);
      }
export function useDialogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DialogQuery, DialogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DialogQuery, DialogQueryVariables>(DialogDocument, options);
        }
export type DialogQueryHookResult = ReturnType<typeof useDialogQuery>;
export type DialogLazyQueryHookResult = ReturnType<typeof useDialogLazyQuery>;
export type DialogQueryResult = Apollo.QueryResult<DialogQuery, DialogQueryVariables>;