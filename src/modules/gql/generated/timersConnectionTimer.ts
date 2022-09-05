/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import { TimerFragment } from './timer_';
import { gql } from '@apollo/client';
import { TimerFragmentDoc } from './timer_';
export type TimersConnectionTimerFragment = (
  { __typename?: 'Timer' }
  & TimerFragment
);

export const TimersConnectionTimerFragmentDoc = gql`
    fragment timersConnectionTimer on Timer {
  ...timer_
}
    ${TimerFragmentDoc}`;