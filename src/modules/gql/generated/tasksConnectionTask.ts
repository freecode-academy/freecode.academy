/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { Task_Fragment } from './task_';
import { gql } from '@apollo/client';
import { Task_FragmentDoc } from './task_';
export type TasksConnectionTaskFragment = (
  { __typename?: 'Task' }
  & Task_Fragment
);

export const TasksConnectionTaskFragmentDoc = gql`
    fragment tasksConnectionTask on Task {
  ...task_
}
    ${Task_FragmentDoc}`;