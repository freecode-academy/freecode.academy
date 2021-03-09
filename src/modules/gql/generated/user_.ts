/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { EthAccountNoNestingFragment } from './EthAccountNoNesting';
import { NotificationTypeNoNestingFragment } from './NotificationTypeNoNesting';
import { TechnologyUserTechnologyFragment } from './technology_UserTechnology';
import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { EthAccountNoNestingFragmentDoc } from './EthAccountNoNesting';
import { NotificationTypeNoNestingFragmentDoc } from './NotificationTypeNoNesting';
import { TechnologyUserTechnologyFragmentDoc } from './technology_UserTechnology';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
export type UserFragment = (
  { __typename?: 'User', EthAccounts?: Types.Maybe<Array<(
    { __typename?: 'EthAccount' }
    & EthAccountNoNestingFragment
  )>>, NotificationTypes?: Types.Maybe<Array<(
    { __typename?: 'NotificationType' }
    & NotificationTypeNoNestingFragment
  )>>, UserTechnologies?: Types.Maybe<Array<(
    { __typename?: 'UserTechnology', Technology: (
      { __typename?: 'Technology' }
      & TechnologyNoNestingFragment
    ) }
    & TechnologyUserTechnologyFragment
  )>> }
  & UserNoNestingFragment
);

export const UserFragmentDoc = gql`
    fragment user_ on User {
  ...UserNoNesting
  EthAccounts {
    ...EthAccountNoNesting
  }
  NotificationTypes {
    ...NotificationTypeNoNesting
  }
  UserTechnologies {
    ...technology_UserTechnology
    Technology {
      ...TechnologyNoNesting
    }
  }
}
    ${UserNoNestingFragmentDoc}
${EthAccountNoNestingFragmentDoc}
${NotificationTypeNoNestingFragmentDoc}
${TechnologyUserTechnologyFragmentDoc}
${TechnologyNoNestingFragmentDoc}`;