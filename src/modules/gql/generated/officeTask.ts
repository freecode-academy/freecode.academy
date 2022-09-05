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
export type OfficeTaskFragment = { __typename?: 'Task', id: string, name: string, createdAt: globalThis.Date, startDatePlaning?: Types.Maybe<globalThis.Date>, endDatePlaning?: Types.Maybe<globalThis.Date>, startDate?: Types.Maybe<globalThis.Date>, endDate?: Types.Maybe<globalThis.Date>, status: Types.TaskStatus, TaskProjects?: Types.Maybe<Array<{ __typename?: 'ProjectTask', id: string, Project?: Types.Maybe<{ __typename?: 'Project', id: string, name: string }> }>>, CreatedBy?: Types.Maybe<{ __typename?: 'User', id: string, username?: Types.Maybe<string>, fullname?: Types.Maybe<string>, image?: Types.Maybe<string> }> };

export const OfficeTaskFragmentDoc = gql`
    fragment officeTask on Task {
  id
  name
  createdAt
  startDatePlaning
  endDatePlaning
  startDate
  endDate
  status
  TaskProjects {
    id
    Project {
      id
      name
    }
  }
  CreatedBy {
    id
    username
    fullname
    image
  }
}
    `;