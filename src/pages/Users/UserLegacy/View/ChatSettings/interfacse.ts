import { UserPageViewProps } from '../interfaces'
import { ChatSettingProps } from './ChatSetting/interfacse'

export type UserChatSettingsProps = {
  user: UserPageViewProps['user']
  setValue: ChatSettingProps['setValue']
}
