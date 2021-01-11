/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TimersConnectionUserFragment } from './timersConnectionUser';
import { gql } from '@apollo/client';
import { TimersConnectionUserFragmentDoc } from './timersConnectionUser';
export type TimersConnectionTimerFragment = { __typename?: 'Timer', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, stopedAt?: Types.Maybe<globalThis.Date>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & TimersConnectionUserFragment
  )>, Task: { __typename?: 'Task', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, description?: Types.Maybe<string>, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, status: Types.TaskStatus, startDatePlaning?: Types.Maybe<globalThis.Date>, endDatePlaning?: Types.Maybe<globalThis.Date>, startDate?: Types.Maybe<globalThis.Date>, endDate?: Types.Maybe<globalThis.Date>, TaskProjects?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Project: { __typename?: 'Project', id: string, name: string, domain?: Types.Maybe<string>, createdAt: globalThis.Date, updatedAt: globalThis.Date, description?: Types.Maybe<string>, url?: Types.Maybe<string>, sequence?: Types.Maybe<number>, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, contentText?: Types.Maybe<string>, status?: Types.Maybe<Types.ProjectStatus>, public?: Types.Maybe<boolean>, oldID?: Types.Maybe<number>, Resource?: Types.Maybe<{ __typename?: 'Resource', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, type?: Types.Maybe<Types.ResourceType>, name: string, longtitle?: Types.Maybe<string>, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, components?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, contentText?: Types.Maybe<string>, published: boolean, deleted: boolean, hidemenu: boolean, searchable: boolean, uri: string, isfolder: boolean, rating?: Types.Maybe<number>, positiveVotesCount?: Types.Maybe<number>, negativeVotesCount?: Types.Maybe<number>, neutralVotesCount?: Types.Maybe<number>, oldID?: Types.Maybe<number>, commentOldID?: Types.Maybe<number>, class_key?: Types.Maybe<string>, template?: Types.Maybe<number>, mockUpdate?: Types.Maybe<globalThis.Date> }> } }>>, CreatedBy?: Types.Maybe<(
      { __typename?: 'User' }
      & TimersConnectionUserFragment
    )> } };

export const TimersConnectionTimerFragmentDoc = gql`
    fragment timersConnectionTimer on Timer {
  id
  createdAt
  updatedAt
  stopedAt
  CreatedBy {
    ...timersConnectionUser
  }
  Task {
    id
    createdAt
    updatedAt
    name
    description
    content
    status
    startDatePlaning
    endDatePlaning
    startDate
    endDate
    TaskProjects {
      id
      createdAt
      updatedAt
      Project {
        id
        name
        domain
        createdAt
        updatedAt
        description
        url
        sequence
        content
        contentText
        status
        public
        oldID
        Resource {
          id
          createdAt
          updatedAt
          type
          name
          longtitle
          content
          components
          contentText
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
        }
      }
    }
    CreatedBy {
      ...timersConnectionUser
    }
  }
}
    ${TimersConnectionUserFragmentDoc}`;