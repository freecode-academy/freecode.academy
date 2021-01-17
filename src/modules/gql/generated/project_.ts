/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ProjectNoNestingFragment } from './ProjectNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { Task_Fragment } from './task_';
import { gql } from '@apollo/client';
import { ProjectNoNestingFragmentDoc } from './ProjectNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { Task_FragmentDoc } from './task_';
export type Project_Fragment = (
  { __typename?: 'Project', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Members?: Types.Maybe<Array<{ __typename?: 'ProjectMember', id: string, User: (
      { __typename?: 'User' }
      & UserNoNestingFragment
    ) }>>, ProjectTasks?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Task: (
      { __typename?: 'Task' }
      & Task_Fragment
    ) }>>, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, uri: string, name: string, type?: Types.Maybe<Types.ResourceType>, Image?: Types.Maybe<{ __typename?: 'File', id: string, path: string }> }> }
  & ProjectNoNestingFragment
);

export const Project_FragmentDoc = gql`
    fragment project_ on Project {
  ...ProjectNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  Members {
    id
    User {
      ...UserNoNesting
    }
  }
  ProjectTasks(orderBy: createdAt_DESC) {
    id
    createdAt
    updatedAt
    Task {
      ...task_
    }
  }
  Resource {
    id
    uri
    name
    type
    Image {
      id
      path
    }
  }
}
    ${ProjectNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${Task_FragmentDoc}`;