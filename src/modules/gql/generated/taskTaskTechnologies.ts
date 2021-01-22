/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TaskNoNestingFragment } from './TaskNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { TaskTaskTechnology_Fragment } from './taskTaskTechnology_';
import { gql } from '@apollo/client';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TaskTaskTechnology_FragmentDoc } from './taskTaskTechnology_';
export type TaskTaskTechnologiesFragment = (
  { __typename?: 'Task', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, TaskTechnologies?: Types.Maybe<Array<(
    { __typename?: 'TaskTechnology' }
    & TaskTaskTechnology_Fragment
  )>> }
  & TaskNoNestingFragment
);

export const TaskTaskTechnologiesFragmentDoc = gql`
    fragment taskTaskTechnologies on Task {
  ...TaskNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  TaskTechnologies {
    ...taskTaskTechnology_
  }
}
    ${TaskNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${TaskTaskTechnology_FragmentDoc}`;