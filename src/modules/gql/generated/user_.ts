/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { EthAccountNoNestingFragment } from './EthAccountNoNesting';
import { NotificationTypeNoNestingFragment } from './NotificationTypeNoNesting';
import { Technology_UserTechnologyFragment } from './technology_UserTechnology';
import { TechnologyNoNestingFragment } from './TechnologyNoNesting';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { EthAccountNoNestingFragmentDoc } from './EthAccountNoNesting';
import { NotificationTypeNoNestingFragmentDoc } from './NotificationTypeNoNesting';
import { Technology_UserTechnologyFragmentDoc } from './technology_UserTechnology';
import { TechnologyNoNestingFragmentDoc } from './TechnologyNoNesting';
export type User_Fragment = (
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
    & Technology_UserTechnologyFragment
  )>> }
  & UserNoNestingFragment
);

export const User_FragmentDoc = gql`
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
${Technology_UserTechnologyFragmentDoc}
${TechnologyNoNestingFragmentDoc}`;