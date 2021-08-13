/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type FileNoNestingFragment = { __typename?: 'File', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, path: string, filename?: Types.Maybe<string>, name?: Types.Maybe<string>, mimetype: string, encoding: string, size?: Types.Maybe<number>, rank?: Types.Maybe<number> };

export const FileNoNestingFragmentDoc = gql`
    fragment FileNoNesting on File {
  id
  createdAt
  updatedAt
  path
  filename
  name
  mimetype
  encoding
  size
  rank
}
    `;