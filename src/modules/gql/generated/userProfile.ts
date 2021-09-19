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
import { UserFragment } from './user_';
import { gql } from '@apollo/client';
import { MentorMenteeNoNestingFragmentDoc } from './MentorMenteeNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { UserFragmentDoc } from './user_';
export type UserProfileFragment = (
  { __typename?: 'User', about?: Types.Maybe<EditorComponentObject>, MentorMenteeMentors?: Types.Maybe<Array<(
    { __typename?: 'MentorMentee', Mentor?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )>, Mentee?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }
    & MentorMenteeNoNestingFragment
  )>>, MentorMenteeMentees?: Types.Maybe<Array<(
    { __typename?: 'MentorMentee', Mentor?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )>, Mentee?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }
    & MentorMenteeNoNestingFragment
  )>> }
  & UserFragment
);

export const UserProfileFragmentDoc = gql`
    fragment userProfile on User {
  MentorMenteeMentors @include(if: $withMentorMentee) {
    ...MentorMenteeNoNesting
    Mentor {
      ...UserNoNesting
    }
    Mentee {
      ...UserNoNesting
    }
  }
  MentorMenteeMentees @include(if: $withMentorMentee) {
    ...MentorMenteeNoNesting
    Mentor {
      ...UserNoNesting
    }
    Mentee {
      ...UserNoNesting
    }
  }
  about
  ...user_
}
    ${MentorMenteeNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${UserFragmentDoc}`;