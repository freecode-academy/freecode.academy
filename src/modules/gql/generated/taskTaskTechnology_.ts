/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
export type TaskTaskTechnology_Fragment = { __typename?: 'TaskTechnology', id: string, level?: Types.Maybe<1 | 2 | 3 | 4 | 5 |null>, Technology: (
    { __typename?: 'Technology' }
    & TechnologyNoNestingFragment
  ) };

export const TaskTaskTechnology_FragmentDoc = gql`
    fragment taskTaskTechnology_ on TaskTechnology {
  id
  level
  Technology {
    ...TechnologyNoNesting
  }
}
    ${TechnologyNoNestingFragmentDoc}`;