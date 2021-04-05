import { UserViewProps } from '../interfaces'
import { ChatSettingProps } from './ChatSetting/interfacse'

export type UserChatSettingsProps = {
  user: UserViewProps['object']
  setValue: ChatSettingProps['setValue']
}
