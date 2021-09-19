/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { TaskNoNestingFragment } from './TaskNoNesting';
import { ProjectNoNestingFragment } from './ProjectNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import { ProjectNoNestingFragmentDoc } from './ProjectNoNesting';
export type TimerFragment = { __typename?: 'Timer', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, stopedAt?: Types.Maybe<globalThis.Date>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Task?: Types.Maybe<(
    { __typename?: 'Task', TaskProjects?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Project?: Types.Maybe<(
        { __typename?: 'Project', CreatedBy?: Types.Maybe<(
          { __typename?: 'User' }
          & UserNoNestingFragment
        )>, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, uri: string }> }
        & ProjectNoNestingFragment
      )> }>> }
    & TaskNoNestingFragment
  )> };

export const TimerFragmentDoc = gql`
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
  }
}
    ${UserNoNestingFragmentDoc}
${TaskNoNestingFragmentDoc}
${ProjectNoNestingFragmentDoc}`;