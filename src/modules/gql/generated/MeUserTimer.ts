/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type MeUserTimerFragment = { __typename?: 'Timer', id: string, createdAt: globalThis.Date, stopedAt?: Types.Maybe<globalThis.Date>, Task?: Types.Maybe<{ __typename?: 'Task', id: string, name: string, status: Types.TaskStatus, TaskProjects?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, Project?: Types.Maybe<{ __typename?: 'Project', id: string, type?: Types.Maybe<Types.ProjectType>, name: string }> }>> }> };

export const MeUserTimerFragmentDoc = gql`
    fragment MeUserTimer on Timer {
  id
  createdAt
  stopedAt
  Task {
    id
    name
    status
    TaskProjects {
      id
      createdAt
      updatedAt
      Project {
        id
        type
        name
      }
    }
  }
}
    `;