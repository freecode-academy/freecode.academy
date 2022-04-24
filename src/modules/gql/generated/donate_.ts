/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { DonateNoNestingFragment } from './donateNoNesting';
import { UserFragment } from './user_';
import { gql } from '@apollo/client';
import { DonateNoNestingFragmentDoc } from './donateNoNesting';
import { UserFragmentDoc } from './user_';
export type DonateFragment = (
  { __typename?: 'Donate', Donator?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & DonateNoNestingFragment
);

export const DonateFragmentDoc = gql`
    fragment donate_ on Donate {
  ...donateNoNesting
  Donator {
    ...user_
  }
}
    ${DonateNoNestingFragmentDoc}
${UserFragmentDoc}`;