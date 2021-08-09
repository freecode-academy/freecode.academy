/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TaskNoNestingFragment } from './TaskNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { TimerNoNestingFragment } from './TimerNoNesting';
import { ProjectNoNestingFragment } from './ProjectNoNesting';
import { gql } from '@apollo/client';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TimerNoNestingFragmentDoc } from './TimerNoNesting';
import { ProjectNoNestingFragmentDoc } from './ProjectNoNesting';
export type TaskFragment = (
  { __typename?: 'Task', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Timers?: Types.Maybe<Array<(
    { __typename?: 'Timer', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }
    & TimerNoNestingFragment
  )>>, TaskProjects?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Project?: Types.Maybe<(
      { __typename?: 'Project', CreatedBy?: Types.Maybe<(
        { __typename?: 'User' }
        & UserNoNestingFragment
      )>, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, uri?: Types.Maybe<string> }> }
      & ProjectNoNestingFragment
    )> }>>, Parent?: Types.Maybe<{ __typename?: 'Task', id: string }> }
  & TaskNoNestingFragment
);

export const TaskFragmentDoc = gql`
    fragment task_ on Task {
  ...TaskNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  Timers(orderBy: {createdAt: desc}, where: $timersWhere) {
    ...TimerNoNesting
    CreatedBy {
      ...UserNoNesting
    }
  }
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
  Parent {
    id
  }
}
    ${TaskNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${TimerNoNestingFragmentDoc}
${ProjectNoNestingFragmentDoc}`;