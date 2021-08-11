/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ProjectNoNestingFragment } from './ProjectNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { TaskFragment } from './task_';
import { gql } from '@apollo/client';
import { ProjectNoNestingFragmentDoc } from './ProjectNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TaskFragmentDoc } from './task_';
export type ProjectFragment = (
  { __typename?: 'Project', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Members?: Types.Maybe<Array<{ __typename?: 'ProjectMember', id: string, User?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }>>, ProjectTasks?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Task?: Types.Maybe<(
      { __typename?: 'Task' }
      & TaskFragment
    )> }>>, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, uri: string, name?: Types.Maybe<string>, type?: Types.Maybe<Types.ResourceType>, Image?: Types.Maybe<{ __typename?: 'File', id: string, path: string }> }> }
  & ProjectNoNestingFragment
);

export const ProjectFragmentDoc = gql`
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
  ProjectTasks(orderBy: {createdAt: desc}) {
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
${TaskFragmentDoc}`;