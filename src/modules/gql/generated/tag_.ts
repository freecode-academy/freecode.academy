/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
export type TagFragment = { __typename?: 'Tag', id: string, name: string, Resources?: Types.Maybe<Array<{ __typename?: 'ResourceTag', id: string, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, type?: Types.Maybe<Types.ResourceType>, name?: Types.Maybe<string>, uri: string }> }>>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )> };

export const TagFragmentDoc = gql`
    fragment tag_ on Tag {
  id
  name
  Resources {
    id
    Resource {
      id
      type
      name
      uri
    }
  }
  CreatedBy {
    ...UserNoNesting
  }
}
    ${UserNoNestingFragmentDoc}`;