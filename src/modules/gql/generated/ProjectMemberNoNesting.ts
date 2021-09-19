/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type ProjectMemberNoNestingFragment = { __typename?: 'ProjectMember', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, status?: Types.Maybe<Types.ProjectMemberStatus> };

export const ProjectMemberNoNestingFragmentDoc = gql`
    fragment ProjectMemberNoNesting on ProjectMember {
  id
  createdAt
  updatedAt
  status
}
    `;