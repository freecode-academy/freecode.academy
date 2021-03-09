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
  { __typename?: 'Resource', CreatedBy: (
    { __typename?: 'User' }
    & UserNoNestingFragment
  ), Comments?: Types.Maybe<Array<{ __typename?: 'Resource', id: string, uri: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, components?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, CreatedBy: (
      { __typename?: 'User' }
      & UserNoNestingFragment
    ) }>>, Blog?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, uri: string }>, Topic?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, uri: string, type?: Types.Maybe<Types.ResourceType> }>, Tags?: Types.Maybe<Array<{ __typename?: 'ResourceTag', Tag: { __typename?: 'Tag', id: string, name: string } }>>, CodeChallenge?: Types.Maybe<{ __typename?: 'CodeChallenge', id: string, name?: Types.Maybe<string> }>, Task?: Types.Maybe<(
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
  Comments(orderBy: createdAt_ASC) {
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