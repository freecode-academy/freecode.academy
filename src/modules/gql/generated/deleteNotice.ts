/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { NoticeNoNestingFragment } from './NoticeNoNesting';
import { gql } from '@apollo/client';
import { NoticeNoNestingFragmentDoc } from './NoticeNoNesting';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type DeleteNoticeMutationVariables = Types.Exact<{
  where: Types.NoticeWhereUniqueInput;
}>;


export type DeleteNoticeMutation = { __typename?: 'Mutation', deleteNotice?: Types.Maybe<(
    { __typename?: 'Notice' }
    & NoticeNoNestingFragment
  )> };


export const DeleteNoticeDocument = gql`
    mutation deleteNotice($where: NoticeWhereUniqueInput!) {
  deleteNotice(where: $where) {
    ...NoticeNoNesting
  }
}
    ${NoticeNoNestingFragmentDoc}`;
export type DeleteNoticeMutationFn = Apollo.MutationFunction<DeleteNoticeMutation, DeleteNoticeMutationVariables>;

/**
 * __useDeleteNoticeMutation__
 *
 * To run a mutation, you first call `useDeleteNoticeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoticeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoticeMutation, { data, loading, error }] = useDeleteNoticeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteNoticeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoticeMutation, DeleteNoticeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoticeMutation, DeleteNoticeMutationVariables>(DeleteNoticeDocument, options);
      }
export type DeleteNoticeMutationHookResult = ReturnType<typeof useDeleteNoticeMutation>;
export type DeleteNoticeMutationResult = Apollo.MutationResult<DeleteNoticeMutation>;
export type DeleteNoticeMutationOptions = Apollo.BaseMutationOptions<DeleteNoticeMutation, DeleteNoticeMutationVariables>;