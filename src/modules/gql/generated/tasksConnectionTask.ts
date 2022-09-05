/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import { TaskFragment } from './task_';
import { TaskTaskTechnologiesFragment } from './taskTaskTechnologies';
import { gql } from '@apollo/client';
import { TaskFragmentDoc } from './task_';
import { TaskTaskTechnologiesFragmentDoc } from './taskTaskTechnologies';
export type TasksConnectionTaskFragment = (
  { __typename?: 'Task' }
  & TaskFragment
  & TaskTaskTechnologiesFragment
);

export const TasksConnectionTaskFragmentDoc = gql`
    fragment tasksConnectionTask on Task {
  ...task_
  ...taskTaskTechnologies
}
    ${TaskFragmentDoc}
${TaskTaskTechnologiesFragmentDoc}`;