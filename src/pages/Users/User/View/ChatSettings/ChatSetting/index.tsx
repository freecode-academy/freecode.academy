import React, { useCallback } from 'react'
import { ChatSettingProps } from './interfacse'

import CheckBox from 'src/uikit/CheckBox'

const ChatSetting: React.FC<ChatSettingProps> = ({
  name,
  title,
  checked,
  setValue,
}) => {
  const onChange = useCallback(
    (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setValue(name, checked)
    },
    [name, setValue]
  )

  return <CheckBox checked={checked} label={title} onChange={onChange} />
}

export default ChatSetting
