/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TaskNoNestingFragment } from './TaskNoNesting';
import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type TaskTechnology_Fragment = { __typename?: 'TaskTechnology', id: string, createdAt: globalThis.Date, level?: Types.Maybe<1 | 2 | 3 | 4 | 5 |null>, Task: (
    { __typename?: 'Task' }
    & TaskNoNestingFragment
  ), Technology: (
    { __typename?: 'Technology' }
    & TechnologyNoNestingFragment
  ), CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> };

export const TaskTechnology_FragmentDoc = gql`
    fragment taskTechnology_ on TaskTechnology {
  id
  createdAt
  level
  Task {
    ...TaskNoNesting
  }
  Technology {
    ...TechnologyNoNesting
  }
  CreatedBy {
    ...UserNoNesting
  }
}
    ${TaskNoNestingFragmentDoc}
${TechnologyNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}`;