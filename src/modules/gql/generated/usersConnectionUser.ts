/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserNoNestingFragment } from './UserNoNesting';
import { UsersConnectionProjectFragment } from './usersConnectionProject';
import { UsersConnectionResourceFragment } from './usersConnectionResource';
import { gql } from '@apollo/client';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { UsersConnectionProjectFragmentDoc } from './usersConnectionProject';
import { UsersConnectionResourceFragmentDoc } from './usersConnectionResource';
export type UsersConnectionUserFragment = (
  { __typename?: 'User', EthAccounts?: Types.Maybe<Array<{ __typename?: 'EthAccount', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name?: Types.Maybe<string>, description?: Types.Maybe<any>, address: string, type?: Types.Maybe<Types.EthAccountType>, source?: Types.Maybe<string>, bytecode?: Types.Maybe<string>, abi?: Types.Maybe<any>, balance?: Types.Maybe<number> }>>, NotificationTypes?: Types.Maybe<Array<{ __typename?: 'NotificationType', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, code?: Types.Maybe<string>, comment?: Types.Maybe<string>, oldID?: Types.Maybe<number> }>>, Projects?: Types.Maybe<Array<{ __typename?: 'ProjectMember', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, status?: Types.Maybe<Types.ProjectMemberStatus>, Project?: Types.Maybe<(
      { __typename?: 'Project', Resource?: Types.Maybe<(
        { __typename?: 'Resource' }
        & UsersConnectionResourceFragment
      )> }
      & UsersConnectionProjectFragment
    )> }>>, ProjectsCreated?: Types.Maybe<Array<(
    { __typename?: 'Project', Resource?: Types.Maybe<(
      { __typename?: 'Resource' }
      & UsersConnectionResourceFragment
    )> }
    & UsersConnectionProjectFragment
  )>> }
  & UserNoNestingFragment
);

export const UsersConnectionUserFragmentDoc = gql`
    fragment usersConnectionUser on User {
  ...UserNoNesting
  EthAccounts {
    id
    createdAt
    updatedAt
    name
    description
    address
    type
    source
    bytecode
    abi
    balance
  }
  NotificationTypes {
    id
    createdAt
    updatedAt
    name
    code
    comment
    oldID
  }
  Projects {
    id
    createdAt
    updatedAt
    status
    Project {
      ...usersConnectionProject
      Resource {
        ...usersConnectionResource
      }
    }
  }
  ProjectsCreated {
    ...usersConnectionProject
    Resource {
      ...usersConnectionResource
    }
  }
}
    ${UserNoNestingFragmentDoc}
${UsersConnectionProjectFragmentDoc}
${UsersConnectionResourceFragmentDoc}`;