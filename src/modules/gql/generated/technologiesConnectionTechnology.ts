/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { TechnologiesConnectionUserFragment } from './technologiesConnectionUser';
import { TechnologiesConnectionUserTechnologyFragment } from './technologiesConnectionUserTechnology';
import { gql } from '@apollo/client';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
import { TechnologiesConnectionUserFragmentDoc } from './technologiesConnectionUser';
import { TechnologiesConnectionUserTechnologyFragmentDoc } from './technologiesConnectionUserTechnology';
export type TechnologiesConnectionTechnologyFragment = (
  { __typename?: 'Technology', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & TechnologiesConnectionUserFragment
  )>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & TechnologiesConnectionUserFragment
    )> }
    & TechnologiesConnectionUserTechnologyFragment
  )>> }
  & TechnologyNoNestingFragment
);

export const TechnologiesConnectionTechnologyFragmentDoc = gql`
    fragment technologiesConnectionTechnology on Technology {
  ...TechnologyNoNesting
  CreatedBy {
    ...technologiesConnectionUser
  }
  UserTechnologies {
    ...technologiesConnectionUserTechnology
    CreatedBy {
      ...technologiesConnectionUser
    }
  }
}
    ${TechnologyNoNestingFragmentDoc}
${TechnologiesConnectionUserFragmentDoc}
${TechnologiesConnectionUserTechnologyFragmentDoc}`;