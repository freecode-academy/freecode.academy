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
export type MentorMenteeNoNestingFragment = { __typename?: 'MentorMentee', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, status: Types.MentorMenteeStatus, mentorId: string, menteeId: string };

export const MentorMenteeNoNestingFragmentDoc = gql`
    fragment MentorMenteeNoNesting on MentorMentee {
  id
  createdAt
  updatedAt
  status
  mentorId
  menteeId
}
    `;