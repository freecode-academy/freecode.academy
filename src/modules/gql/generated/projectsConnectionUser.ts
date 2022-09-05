/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type ProjectsConnectionUserFragment = (
  { __typename?: 'User' }
  & UserNoNestingFragment
);

export const ProjectsConnectionUserFragmentDoc = gql`
    fragment projectsConnectionUser on User {
  ...UserNoNesting
}
    ${UserNoNestingFragmentDoc}`;