/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { UserProfileFragment } from './userProfile';
import { MeUserTimerFragment } from './MeUserTimer';
import { gql } from '@apollo/client';
import { UserProfileFragmentDoc } from './userProfile';
import { MeUserTimerFragmentDoc } from './MeUserTimer';
export type MeUserFragment = (
  { __typename?: 'User', Timers?: Types.Maybe<Array<(
    { __typename?: 'Timer' }
    & MeUserTimerFragment
  )>> }
  & UserProfileFragment
);

export const MeUserFragmentDoc = gql`
    fragment meUser on User {
  ...userProfile
  Timers(first: 1, where: {stopedAt: null}) {
    ...MeUserTimer
  }
}
    ${UserProfileFragmentDoc}
${MeUserTimerFragmentDoc}`;