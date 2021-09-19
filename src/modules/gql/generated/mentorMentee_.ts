/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { MentorMenteeNoNestingFragment } from './MentorMenteeNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { MentorMenteeNoNestingFragmentDoc } from './MentorMenteeNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type MentorMenteeFragment = (
  { __typename?: 'MentorMentee', Mentor?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Mentee?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> }
  & MentorMenteeNoNestingFragment
);

export const MentorMenteeFragmentDoc = gql`
    fragment mentorMentee_ on MentorMentee {
  ...MentorMenteeNoNesting
  Mentor {
    ...UserNoNesting
  }
  Mentee {
    ...UserNoNesting
  }
}
    ${MentorMenteeNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;