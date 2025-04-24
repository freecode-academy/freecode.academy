/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/
// @ts-nocheck

// @ts-ignore
import { EditorComponentObject } from '@prisma-cms/front-editor'


import * as Types from './types';

import { ChatMessageFragment } from './ChatMessage_';
import { AuthPayloadFragment } from './AuthPayload_';
import { gql } from '@apollo/client';
import { ChatMessageFragmentDoc } from './ChatMessage_';
import { AuthPayloadFragmentDoc } from './AuthPayload_';
export type ChatMessageResponseFragment = { __typename?: 'ChatMessageResponse', success: boolean, message: string, errors: Array<{ __typename?: 'RequestError', key: string, message: string }>, data?: Types.Maybe<(
    { __typename?: 'ChatMessage' }
    & ChatMessageFragment
  )>, reply?: Types.Maybe<(
    { __typename?: 'ChatMessage' }
    & ChatMessageFragment
  )>, createdUser?: Types.Maybe<(
    { __typename?: 'AuthPayload' }
    & AuthPayloadFragment
  )> };

export const ChatMessageResponseFragmentDoc = gql`
    fragment ChatMessageResponse_ on ChatMessageResponse {
  success
  message
  errors {
    key
    message
  }
  data {
    ...ChatMessage_
  }
  reply {
    ...ChatMessage_
  }
  createdUser {
    ...AuthPayload_
  }
}
    ${ChatMessageFragmentDoc}
${AuthPayloadFragmentDoc}`;