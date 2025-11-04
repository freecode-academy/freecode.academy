import React, { useEffect, useState } from 'react'
import { useAppContext } from 'src/AppContext'

import { useSnackbar } from 'src/components/Snackbar'
import {
  AuthPayloadFragment,
  useAuthViaTelegramMutation,
} from 'src/gql/generated'

type TelegramButtonProps = {
  botName: string
  buttonSize: 'large' | 'medium' | 'small'
  cornerRadius: number
}

export type TelegramAuthFormProps = {
  onAuthSuccessHandler?: (data: AuthPayloadFragment) => void
  buttonSize?: TelegramButtonProps['buttonSize']
}

export const TelegramAuthForm: React.FC<TelegramAuthFormProps> = ({
  onAuthSuccessHandler,
  buttonSize = 'large',
}) => {
  const [container, containerSetter] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!container) {
      return
    }

    const telegramAuthProps: TelegramButtonProps = {
      botName: process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || '',
      cornerRadius: 5,
      buttonSize,
    }

    // Подключаем скрипт Telegram login
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-widget.js?7'
    script.async = true
    script.setAttribute('data-telegram-login', telegramAuthProps.botName)
    script.setAttribute('data-size', telegramAuthProps.buttonSize)
    script.setAttribute('data-radius', String(telegramAuthProps.cornerRadius))
    script.setAttribute('data-onauth', 'onTelegramAuth(user)')
    script.setAttribute('data-request-access', 'write')

    container.appendChild(script)

    // Чистим при размонтировании
    return () => {
      delete (window as any).onTelegramAuth
    }
  }, [container, buttonSize])

  const { addMessage } = useSnackbar() || {}

  const { onAuthSuccess } = useAppContext()

  const [authMutation] = useAuthViaTelegramMutation()

  useEffect(() => {
    async function onAuth(authData: any) {
      try {
        await authMutation({
          variables: {
            tgAuthData: authData,
          },
        }).then((r) => {
          if (r.data?.authViaTelegram.data) {
            onAuthSuccess(r.data.authViaTelegram)

            onAuthSuccessHandler?.(r.data.authViaTelegram)
          } else {
            throw new Error(r.data?.authViaTelegram.message || '')
          }
        })
      } catch (error) {
        addMessage?.((error as Error).message || 'Ошибка выполнения запроса', {
          variant: 'error',
        })
      }
    }

    ;(window as any).onTelegramAuth = onAuth
  }, [addMessage, authMutation, onAuthSuccess, onAuthSuccessHandler])

  return (
    <>
      <div
        style={{
          display: 'contents',
        }}
        ref={containerSetter}
      ></div>
    </>
  )
}
