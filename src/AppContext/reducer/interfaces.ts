import { Reducer } from 'react'
import { TabType } from 'src/TabSwitcher/interfaces'
import { ChatMessageFragment } from 'src/gql/generated'

export enum AppActions {
  ChatAddMessage = 'ChatAddMessage',
  ChatSetInRequest = 'ChatSetInRequest',
  ChangeTab = 'ChangeTab',
  ToggleChatTab = 'ToggleChatTab',
  SetSlidePosition = 'SetSlidePosition',
}

export type AppAction =
  | {
      type: AppActions.ChatAddMessage
      message: ChatMessageFragment
    }
  | {
      type: AppActions.ChatSetInRequest
      chatInRequest: boolean
    }
  | {
      type: AppActions.ChangeTab
      tab: TabType
    }
  | {
      type: AppActions.ToggleChatTab
    }
  | {
      type: AppActions.SetSlidePosition
      position: number
    }

export type AppState = {
  /**
   * @deprecated
   */
  chatMessages: ChatMessageFragment[]
  /**
   * @deprecated
   */
  chatInRequest: boolean
  /**
   * @deprecated
   */
  activeTab: TabType
  /**
   * @deprecated
   */
  chatTabOpened: boolean
  /**
   * @deprecated
   */
  slidePosition: number
}

export type AppReducer = Reducer<AppState, AppAction>
