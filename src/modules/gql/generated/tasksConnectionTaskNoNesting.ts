/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type TasksConnectionTaskNoNestingFragment = { __typename?: 'Task', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, description?: Types.Maybe<string>, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, status: Types.TaskStatus, startDatePlaning?: Types.Maybe<globalThis.Date>, endDatePlaning?: Types.Maybe<globalThis.Date>, startDate?: Types.Maybe<globalThis.Date>, endDate?: Types.Maybe<globalThis.Date> };

export const TasksConnectionTaskNoNestingFragmentDoc = gql`
    fragment tasksConnectionTaskNoNesting on Task {
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
}
    `;