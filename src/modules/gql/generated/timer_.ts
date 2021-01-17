/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { TaskNoNestingFragment } from './TaskNoNesting';
import { ProjectNoNestingFragment } from './ProjectNoNesting';
import { TaskReactionNoNestingFragment } from './TaskReactionNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import { ProjectNoNestingFragmentDoc } from './ProjectNoNesting';
import { TaskReactionNoNestingFragmentDoc } from './TaskReactionNoNesting';
export type Timer_Fragment = { __typename?: 'Timer', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, stopedAt?: Types.Maybe<globalThis.Date>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Task: (
    { __typename?: 'Task', TaskProjects?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Project: (
        { __typename?: 'Project', CreatedBy?: Types.Maybe<(
          { __typename?: 'User' }
          & UserNoNestingFragment
        )>, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, name: string, uri: string }> }
        & ProjectNoNestingFragment
      ) }>>, RelatedTo?: Types.Maybe<Array<(
      { __typename?: 'Task' }
      & TaskNoNestingFragment
    )>>, Reactions?: Types.Maybe<Array<(
      { __typename?: 'TaskReaction', CreatedBy?: Types.Maybe<(
        { __typename?: 'User' }
        & UserNoNestingFragment
      )> }
      & TaskReactionNoNestingFragment
    )>> }
    & TaskNoNestingFragment
  ) };

export const Timer_FragmentDoc = gql`
    fragment timer_ on Timer {
  id
  createdAt
  updatedAt
  stopedAt
  CreatedBy {
    ...UserNoNesting
  }
  Task {
    ...TaskNoNesting
    TaskProjects {
      id
      createdAt
      updatedAt
      Project {
        ...ProjectNoNesting
        CreatedBy {
          ...UserNoNesting
        }
        Resource {
          id
          name
          uri
        }
      }
    }
    RelatedTo {
      ...TaskNoNesting
    }
    Reactions {
      ...TaskReactionNoNesting
      CreatedBy {
        ...UserNoNesting
      }
    }
  }
}
    ${UserNoNestingFragmentDoc}
${TaskNoNestingFragmentDoc}
${ProjectNoNestingFragmentDoc}
${TaskReactionNoNestingFragmentDoc}`;