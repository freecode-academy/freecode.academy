/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type OfficeTaskFragment = { __typename?: 'Task', id: string, name: string };

export const OfficeTaskFragmentDoc = gql`
    fragment officeTask on Task {
  id
  name
}
    `;