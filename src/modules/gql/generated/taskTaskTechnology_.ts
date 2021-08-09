/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
export type TaskTaskTechnologyFragment = { __typename?: 'TaskTechnology', id: string, level?: Types.Maybe<1 | 2 | 3 | 4 | 5 |null>, Technology?: Types.Maybe<(
    { __typename?: 'Technology' }
    & TechnologyNoNestingFragment
  )> };

export const TaskTaskTechnologyFragmentDoc = gql`
    fragment taskTaskTechnology_ on TaskTechnology {
  id
  level
  Technology {
    ...TechnologyNoNesting
  }
}
    ${TechnologyNoNestingFragmentDoc}`;