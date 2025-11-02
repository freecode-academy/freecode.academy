import React from 'react'
import { TelegramAuthForm } from 'src/pages/Users/SignUp/Form/TelegramAuthForm'

export const ConnectTelegram: React.FC = () => {
  return (
    <div>
      Подключить свой аккаунт в телеграме <TelegramAuthForm />
    </div>
  )
}
