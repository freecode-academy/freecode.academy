/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type EthAccountNoNestingFragment = { __typename?: 'EthAccount', id: string, createdAt: globalThis.Date, updatedAt: globalThis.Date, name?: Types.Maybe<string>, description?: Types.Maybe<any>, address: string, type?: Types.Maybe<Types.EthAccountType>, source?: Types.Maybe<string>, bytecode?: Types.Maybe<string>, abi?: Types.Maybe<any>, balance?: Types.Maybe<number> };

export const EthAccountNoNestingFragmentDoc = gql`
    fragment EthAccountNoNesting on EthAccount {
  id
  createdAt
  updatedAt
  name
  description
  address
  type
  source
  bytecode
  abi
  balance
}
    `;