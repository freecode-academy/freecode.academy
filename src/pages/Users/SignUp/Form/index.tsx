import React, { useCallback } from 'react'
import { TelegramAuthForm, TelegramAuthFormProps } from './TelegramAuthForm'
import { useRouter } from 'next/router'

export const SignUpForm: React.FC = () => {
  const router = useRouter()

  const onAuthSuccessHandler = useCallback<
    NonNullable<TelegramAuthFormProps['onAuthSuccessHandler']>
  >(() => {
    router.push('/')
  }, [router])

  return (
    <>
      <h3>В настоящий момент регистрация возможна только через телеграм.</h3>

      <p>Регистрация обычным способом будет реализована чуть позже.</p>

      <TelegramAuthForm onAuthSuccessHandler={onAuthSuccessHandler} />
    </>
  )
}
