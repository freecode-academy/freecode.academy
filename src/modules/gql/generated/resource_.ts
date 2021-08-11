/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ResourceNoNestingFragment } from './ResourceNoNesting';
import { UserNoNestingFragment } from './UserNoNesting';
import { TaskNoNestingFragment } from './TaskNoNesting';
import { gql } from '@apollo/client';
import { ResourceNoNestingFragmentDoc } from './ResourceNoNesting';
import { UserNoNestingFragmentDoc } from './UserNoNesting';
import { TaskNoNestingFragmentDoc } from './TaskNoNesting';
export type ResourceFragment = (
  { __typename?: 'Resource', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserNoNestingFragment
  )>, Comments?: Types.Maybe<Array<{ __typename?: 'Resource', id: string, uri: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, content?: Types.Maybe<any>, components?: Types.Maybe<any>, CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & UserNoNestingFragment
    )> }>>, Blog?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, uri: string }>, Topic?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, uri: string, type?: Types.Maybe<Types.ResourceType> }>, Tags?: Types.Maybe<Array<{ __typename?: 'ResourceTag', id: string, Tag?: Types.Maybe<{ __typename?: 'Tag', id: string, name: string }> }>>, CodeChallenge?: Types.Maybe<{ __typename?: 'CodeChallenge', id: string, name?: Types.Maybe<string> }>, Task?: Types.Maybe<(
    { __typename?: 'Task' }
    & TaskNoNestingFragment
  )> }
  & ResourceNoNestingFragment
);

export const ResourceFragmentDoc = gql`
    fragment resource_ on Resource {
  ...ResourceNoNesting
  CreatedBy {
    ...UserNoNesting
  }
  Comments(orderBy: {createdAt: asc}) {
    id
    uri
    createdAt
    updatedAt
    content
    components
    CreatedBy {
      ...UserNoNesting
    }
  }
  Blog {
    id
    name
    longtitle
    uri
  }
  Topic {
    id
    name
    longtitle
    uri
    type
  }
  Tags {
    id
    Tag {
      id
      name
    }
  }
  CodeChallenge {
    id
    name
  }
  Task {
    ...TaskNoNesting
  }
}
    ${ResourceNoNestingFragmentDoc}
${UserNoNestingFragmentDoc}
${TaskNoNestingFragmentDoc}`;