import { UserViewProps } from '../interfaces'
import { ChatSettingProps } from './ChatSetting/interfacse'

export type UserChatSettingsProps = {
  user: UserViewProps['user']
  setValue: ChatSettingProps['setValue']
}
