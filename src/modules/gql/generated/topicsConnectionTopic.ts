/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { TopicsConnectionUserFragment } from './topicsConnectionUser';
import { gql } from '@apollo/client';
import { TopicsConnectionUserFragmentDoc } from './topicsConnectionUser';
export type TopicsConnectionTopicFragment = { __typename?: 'Resource', id: string, updatedAt: globalThis.Date, name?: Types.Maybe<string>, uri: string, longtitle?: Types.Maybe<string>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & TopicsConnectionUserFragment
  )>, Comments?: Types.Maybe<Array<{ __typename?: 'Resource', id: string, updatedAt: globalThis.Date, CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & TopicsConnectionUserFragment
    )> }>>, Blog?: Types.Maybe<{ __typename?: 'Resource', id: string, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, uri: string }>, Tags?: Types.Maybe<Array<{ __typename?: 'ResourceTag', Tag?: Types.Maybe<{ __typename?: 'Tag', id: string, name: string }> }>> };

export const TopicsConnectionTopicFragmentDoc = gql`
    fragment topicsConnectionTopic on Resource {
  id
  updatedAt
  name
  uri
  longtitle
  CreatedBy {
    ...topicsConnectionUser
  }
  Comments(orderBy: {createdAt: asc}) {
    id
    updatedAt
    CreatedBy {
      ...topicsConnectionUser
    }
  }
  Blog {
    id
    name
    longtitle
    uri
  }
  Tags {
    Tag {
      id
      name
    }
  }
}
    ${TopicsConnectionUserFragmentDoc}`;