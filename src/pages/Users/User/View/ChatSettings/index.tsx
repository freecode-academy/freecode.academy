import React from 'react'
import Grid from 'src/uikit/Grid'
import Paper from 'src/uikit/Paper'
import Title from 'src/uikit/Title'
import ChatSetting from './ChatSetting'
import { UserChatSettingsProps } from './interfacse'

const UserChatSettings: React.FC<UserChatSettingsProps> = ({
  user,
  setValue,
}) => {
  return (
    <Grid container spacing={8}>
      <Paper>
        <Title>Настройки чата</Title>

        <p>
          <ChatSetting
            name={'acceptNewChatRoom'}
            title="Пользователям разрешено заводить с вами новые диалоги"
            checked={user.acceptNewChatRoom || false}
            setValue={setValue}
          />
        </p>

        {/* 
        TODO: https://freecode.academy/tasks/ckn41hjv8obwy0730qxj6dhix
        <p>
          <ChatSetting
            name={"acceptNewChatRoomAnonymous"}
            title="Анонимным пользователям разрешено заводить с вами новые диалоги"
            checked={user.acceptNewChatRoomAnonymous || false}
            setValue={setValue}
          />
        </p>

        <p>
          <ChatSetting
            name={"acceptChatMessageAnonymous"}
            title="Анонимным пользователям разрешено отправлять вам сообщения"
            checked={user.acceptChatMessageAnonymous || false}
            setValue={setValue}
          />
        </p> 
        */}
      </Paper>
    </Grid>
  )
}

export default UserChatSettings
