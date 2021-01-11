/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { UserTechnologyFragment } from './userTechnology';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { UserTechnologyFragmentDoc } from './userTechnology';
export type Technology_Fragment = { __typename?: 'Technology', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name?: Types.Maybe<string>, components?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, contentText?: Types.Maybe<string>, site_url?: Types.Maybe<string>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology', CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }
    & UserTechnologyFragment
  )>> };

export const Technology_FragmentDoc = gql`
    fragment technology_ on Technology {
  id
  createdAt
  updatedAt
  name
  components
  contentText
  site_url
  CreatedBy {
    ...UserNoNesting
  }
  UserTechnologies {
    ...userTechnology
    CreatedBy {
      ...UserNoNesting
    }
  }
}
    ${UserNoNestingFragmentDoc}
${UserTechnologyFragmentDoc}`;