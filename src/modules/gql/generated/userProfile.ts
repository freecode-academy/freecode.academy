/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { MentorMenteeNoNestingFragment } from './MentorMenteeNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { NotificationTypeNoNestingFragment } from './NotificationTypeNoNesting';
import { TechnologyUserTechnologyFragment } from './technology_UserTechnology';
import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { MeUserCodeChallengeCompletionFragment } from './MeUserCodeChallengeCompletion';
import { UserFragment } from './user_';
import { gql } from '@apollo/client';
import { MentorMenteeNoNestingFragmentDoc } from './MentorMenteeNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { NotificationTypeNoNestingFragmentDoc } from './NotificationTypeNoNesting';
import { TechnologyUserTechnologyFragmentDoc } from './technology_UserTechnology';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { MeUserCodeChallengeCompletionFragmentDoc } from './MeUserCodeChallengeCompletion';
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
  )>>, NotificationTypes?: Types.Maybe<Array<(
    { __typename?: 'NotificationType' }
    & NotificationTypeNoNestingFragment
  )>>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology', Technology?: Types.Maybe<(
      { __typename?: 'Technology' }
      & TechnologyNoNestingFragment
    )> }
    & TechnologyUserTechnologyFragment
  )>>, CodeChallengeCompletions?: Types.Maybe<Array<(
    { __typename?: 'CodeChallengeCompletion' }
    & MeUserCodeChallengeCompletionFragment
  )>>, EducationProjects?: Types.Maybe<Array<{ __typename?: 'Project', id: string, name: string, type?: Types.Maybe<Types.ProjectType> }>> }
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
  NotificationTypes @include(if: $withNotificationTypes) {
    ...NotificationTypeNoNesting
  }
  UserTechnologies @include(if: $withUserTechnologies) {
    ...technology_UserTechnology
    Technology {
      ...TechnologyNoNesting
    }
  }
  CodeChallengeCompletions @include(if: $withCodeChallengeCompletions) {
    ...MeUserCodeChallengeCompletion
  }
  EducationProjects: ProjectsCreated(take: 1, where: {type: {equals: Education}}) @include(if: $withEducationProjects) {
    id
    name
    type
  }
  ...user_
}
    ${MentorMenteeNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${NotificationTypeNoNestingFragmentDoc}
${TechnologyUserTechnologyFragmentDoc}
${TechnologyNoNestingFragmentDoc}
${MeUserCodeChallengeCompletionFragmentDoc}
${UserFragmentDoc}`;