/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { BlogsConnectionUserFragment } from './BlogsConnectionUser';
import { gql } from '@apollo/client';
import { BlogsConnectionUserFragmentDoc } from './BlogsConnectionUser';
export type BlogsConnectionResourceFragment = { __typename?: 'Resource', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, type?: Types.Maybe<Types.ResourceType>, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, content?: Types.Maybe<any>, components?: Types.Maybe<any>, published: boolean, deleted: boolean, hidemenu: boolean, searchable: boolean, uri: string, isfolder: boolean, rating?: Types.Maybe<number>, positiveVotesCount?: Types.Maybe<number>, negativeVotesCount?: Types.Maybe<number>, neutralVotesCount?: Types.Maybe<number>, oldID?: Types.Maybe<number>, commentOldID?: Types.Maybe<number>, class_key?: Types.Maybe<string>, template?: Types.Maybe<number>, mockUpdate?: Types.Maybe<globalThis.Date>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & BlogsConnectionUserFragment
  )> };

export const BlogsConnectionResourceFragmentDoc = gql`
    fragment BlogsConnectionResource on Resource {
  id
  createdAt
  updatedAt
  type
  name
  longtitle
  content
  components
  published
  deleted
  hidemenu
  searchable
  uri
  isfolder
  rating
  positiveVotesCount
  negativeVotesCount
  neutralVotesCount
  oldID
  commentOldID
  class_key
  template
  mockUpdate
  CreatedBy {
    ...BlogsConnectionUser
  }
}
    ${BlogsConnectionUserFragmentDoc}`;