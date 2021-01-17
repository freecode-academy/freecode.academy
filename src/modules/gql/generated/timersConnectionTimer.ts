/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { Timer_Fragment } from './timer_';
import { gql } from '@apollo/client';
import { Timer_FragmentDoc } from './timer_';
export type TimersConnectionTimerFragment = (
  { __typename?: 'Timer' }
  & Timer_Fragment
);

export const TimersConnectionTimerFragmentDoc = gql`
    fragment timersConnectionTimer on Timer {
  ...timer_
}
    ${Timer_FragmentDoc}`;