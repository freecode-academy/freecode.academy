/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import { FileNoNestingFragment } from './FileNoNesting';
import { gql } from '@apollo/client';
import { FileNoNestingFragmentDoc } from './FileNoNesting';
export type FileFragment = (
  { __typename?: 'File' }
  & FileNoNestingFragment
);

export const FileFragmentDoc = gql`
    fragment file on File {
  ...FileNoNesting
}
    ${FileNoNestingFragmentDoc}`;