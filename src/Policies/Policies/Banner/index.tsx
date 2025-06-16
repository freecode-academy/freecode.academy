import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import {
  PoliciesBannerStyled,
  BannerWrapperTextStyled,
  BannerWrapperTextSiteStyled,
  BannerWrapperTextH2Styled,
  BannerWrapperTextBlockStyled,
  BannerWrapperAcceptButtonStyled,
  OverlayStyled,
} from './styles'
import Link from 'src/uikit/Link'
import { useSignupMutation } from 'src/gql/generated'
import { useAppContext } from 'src/AppContext'
import { useRouter } from 'next/router'

export const PoliciesBanner: React.FC = () => {
  const { user, loginComplete } = useAppContext()

  const [state, stateSetter] = useState<'closed' | 'opened' | 'closing'>()

  useEffect(() => {
    if (user) {
      stateSetter((state) =>
        state ? (state === 'opened' ? 'closing' : 'closed') : undefined
      )

      return
    }

    const callback = () => {
      stateSetter((state) => {
        if (user === null) {
          return 'opened'
        } else if (user) {
          return state ? (state === 'opened' ? 'closing' : 'closed') : undefined
        }

        return state
      })
    }

    const interval = setTimeout(callback, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [user])

  const opened = state === 'opened'
  const isClosing = state === 'closing'
  const showBanner = opened || isClosing

  const [mutation] = useSignupMutation()

  const router = useRouter()

  const handleAnimationEnd = useCallback(() => {
    if (isClosing) {
      stateSetter('closed')
    }
  }, [isClosing])

  const acceptFn = useCallback(() => {
    try {
      mutation({
        variables: {},
      }).then((r) => {
        const {
          success,
          message,
          errors,
          token,
          data: user,
        } = r.data?.response || {}

        if (success && token && user) {
          loginComplete({
            token,
            user,
          })

          router.push('/')
        } else {
          console.error(errors)
          throw new Error(message || 'Ошибка выполнения запроса')
        }
      })
    } catch (error) {
      console.error(error)
      alert('Ой, а что-то пошло не так...')
    }
  }, [loginComplete, mutation, router])

  const banner = (
    <>
      <OverlayStyled $isClosing={isClosing} />
      <PoliciesBannerStyled
        $isClosing={isClosing}
        onAnimationEnd={handleAnimationEnd}
      >
        <BannerWrapperTextBlockStyled>
          <BannerWrapperTextStyled>
            <BannerWrapperTextH2Styled>
              Условия использования сайта
            </BannerWrapperTextH2Styled>

            <BannerWrapperTextSiteStyled>
              Сайт Freecode.Academy{' '}
              <Link href="https://freecode.academy/">
                https://freecode.academy/
              </Link>{' '}
              автоматически создает для вас обезличенную учетную запись при
              первом посещении. Это открывает доступ к функциям сайта. Продолжая
              использовать сайт, вы соглашаетесь с обработкой данных. Если вы не
              согласны, пожалуйста, покиньте сайт.
            </BannerWrapperTextSiteStyled>
          </BannerWrapperTextStyled>
        </BannerWrapperTextBlockStyled>

        <BannerWrapperAcceptButtonStyled as={Link} href="/signin">
          У меня уже есть пользователь, дайте авторизоваться
        </BannerWrapperAcceptButtonStyled>

        <BannerWrapperAcceptButtonStyled onClick={acceptFn}>
          Я согласен, создайте уже мне пользователя
        </BannerWrapperAcceptButtonStyled>
      </PoliciesBannerStyled>
    </>
  )

  return showBanner ? ReactDOM.createPortal(banner, document.body) : null
}
