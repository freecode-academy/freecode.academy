/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { CodeChallengeFragment } from './codeChallenge_';
import { gql } from '@apollo/client';
import { CodeChallengeFragmentDoc } from './codeChallenge_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateCodeChallengeMutationVariables = Types.Exact<{
  where: Types.CodeChallengeWhereUniqueInput;
  data: Types.CodeChallengeUpdateInput;
}>;


export type UpdateCodeChallengeMutation = { __typename?: 'Mutation', updateCodeChallenge: (
    { __typename?: 'CodeChallenge' }
    & CodeChallengeFragment
  ) };


export const UpdateCodeChallengeDocument = gql`
    mutation updateCodeChallenge($where: CodeChallengeWhereUniqueInput!, $data: CodeChallengeUpdateInput!) {
  updateCodeChallenge(where: $where, data: $data) {
    ...codeChallenge_
  }
}
    ${CodeChallengeFragmentDoc}`;
export type UpdateCodeChallengeMutationFn = Apollo.MutationFunction<UpdateCodeChallengeMutation, UpdateCodeChallengeMutationVariables>;

/**
 * __useUpdateCodeChallengeMutation__
 *
 * To run a mutation, you first call `useUpdateCodeChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCodeChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCodeChallengeMutation, { data, loading, error }] = useUpdateCodeChallengeMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCodeChallengeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCodeChallengeMutation, UpdateCodeChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCodeChallengeMutation, UpdateCodeChallengeMutationVariables>(UpdateCodeChallengeDocument, options);
      }
export type UpdateCodeChallengeMutationHookResult = ReturnType<typeof useUpdateCodeChallengeMutation>;
export type UpdateCodeChallengeMutationResult = Apollo.MutationResult<UpdateCodeChallengeMutation>;
export type UpdateCodeChallengeMutationOptions = Apollo.BaseMutationOptions<UpdateCodeChallengeMutation, UpdateCodeChallengeMutationVariables>;