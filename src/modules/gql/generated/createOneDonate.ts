/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { DonateFragment } from './donate_';
import { gql } from '@apollo/client';
import { DonateFragmentDoc } from './donate_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneDonateMutationVariables = Types.Exact<{
  data: Types.DonateCreateInput;
}>;


export type CreateOneDonateMutation = { __typename?: 'Mutation', createOneDonate: (
    { __typename?: 'Donate' }
    & DonateFragment
  ) };


export const CreateOneDonateDocument = gql`
    mutation createOneDonate($data: DonateCreateInput!) {
  createOneDonate(data: $data) {
    ...donate_
  }
}
    ${DonateFragmentDoc}`;
export type CreateOneDonateMutationFn = Apollo.MutationFunction<CreateOneDonateMutation, CreateOneDonateMutationVariables>;

/**
 * __useCreateOneDonateMutation__
 *
 * To run a mutation, you first call `useCreateOneDonateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneDonateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneDonateMutation, { data, loading, error }] = useCreateOneDonateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneDonateMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneDonateMutation, CreateOneDonateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneDonateMutation, CreateOneDonateMutationVariables>(CreateOneDonateDocument, options);
      }
export type CreateOneDonateMutationHookResult = ReturnType<typeof useCreateOneDonateMutation>;
export type CreateOneDonateMutationResult = Apollo.MutationResult<CreateOneDonateMutation>;
export type CreateOneDonateMutationOptions = Apollo.BaseMutationOptions<CreateOneDonateMutation, CreateOneDonateMutationVariables>;