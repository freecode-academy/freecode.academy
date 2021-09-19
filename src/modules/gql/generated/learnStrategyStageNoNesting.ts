/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { gql } from '@apollo/client';
export type LearnStrategyStageNoNestingFragment = { __typename?: 'LearnStrategyStage', id: string, createdAt: globalThis.Date, learnStrategyId: string, learnStrategyTargetId?: Types.Maybe<string>, technologyId?: Types.Maybe<string>, level?: Types.Maybe<number> };

export const LearnStrategyStageNoNestingFragmentDoc = gql`
    fragment learnStrategyStageNoNesting on LearnStrategyStage {
  id
  createdAt
  learnStrategyId
  learnStrategyTargetId
  technologyId
  level
}
    `;