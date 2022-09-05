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
export type ProjectNoNestingFragment = { __typename?: 'Project', id: string, name: string, domain?: Types.Maybe<string>, createdAt: globalThis.Date, updatedAt: globalThis.Date, description?: Types.Maybe<string>, url?: Types.Maybe<string>, sequence?: Types.Maybe<number>, content?: Types.Maybe<any>, status?: Types.Maybe<Types.ProjectStatus>, public?: Types.Maybe<boolean>, oldID?: Types.Maybe<number>, type?: Types.Maybe<Types.ProjectType> };

export const ProjectNoNestingFragmentDoc = gql`
    fragment ProjectNoNesting on Project {
  id
  name
  domain
  createdAt
  updatedAt
  description
  url
  sequence
  content
  status
  public
  oldID
  type
}
    `;