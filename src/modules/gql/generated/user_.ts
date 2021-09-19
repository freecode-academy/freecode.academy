/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { EthAccountNoNestingFragment } from './EthAccountNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { EthAccountNoNestingFragmentDoc } from './EthAccountNoNesting';
export type UserFragment = (
  { __typename?: 'User', EthAccounts?: Types.Maybe<Array<(
    { __typename?: 'EthAccount' }
    & EthAccountNoNestingFragment
  )>> }
  & UserNoNestingFragment
);

export const UserFragmentDoc = gql`
    fragment user_ on User {
  ...UserNoNesting
  EthAccounts {
    ...EthAccountNoNesting
  }
}
    ${UserNoNestingFragmentDoc}
${EthAccountNoNestingFragmentDoc}`;