/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { MentorMenteeFragment } from './mentorMentee_';
import { gql } from '@apollo/client';
import { MentorMenteeFragmentDoc } from './mentorMentee_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateMentorMenteeMutationVariables = Types.Exact<{
  data: Types.MentorMenteeCreateInput;
}>;


export type CreateMentorMenteeMutation = { __typename?: 'Mutation', createMentorMentee: (
    { __typename?: 'MentorMentee' }
    & MentorMenteeFragment
  ) };


export const CreateMentorMenteeDocument = gql`
    mutation createMentorMentee($data: MentorMenteeCreateInput!) {
  createMentorMentee(data: $data) {
    ...mentorMentee_
  }
}
    ${MentorMenteeFragmentDoc}`;
export type CreateMentorMenteeMutationFn = Apollo.MutationFunction<CreateMentorMenteeMutation, CreateMentorMenteeMutationVariables>;

/**
 * __useCreateMentorMenteeMutation__
 *
 * To run a mutation, you first call `useCreateMentorMenteeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMentorMenteeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMentorMenteeMutation, { data, loading, error }] = useCreateMentorMenteeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMentorMenteeMutation(baseOptions?: Apollo.MutationHookOptions<CreateMentorMenteeMutation, CreateMentorMenteeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMentorMenteeMutation, CreateMentorMenteeMutationVariables>(CreateMentorMenteeDocument, options);
      }
export type CreateMentorMenteeMutationHookResult = ReturnType<typeof useCreateMentorMenteeMutation>;
export type CreateMentorMenteeMutationResult = Apollo.MutationResult<CreateMentorMenteeMutation>;
export type CreateMentorMenteeMutationOptions = Apollo.BaseMutationOptions<CreateMentorMenteeMutation, CreateMentorMenteeMutationVariables>;