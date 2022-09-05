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
export type DonateNoNestingFragment = { __typename?: 'Donate', id: string, date: globalThis.Date, sum: number, title?: Types.Maybe<string>, donatorId?: Types.Maybe<string> };

export const DonateNoNestingFragmentDoc = gql`
    fragment donateNoNesting on Donate {
  id
  date
  sum
  title
  donatorId
}
    `;