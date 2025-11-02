import React from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import dynamic from 'next/dynamic'
import { Button } from 'src/components/Button'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import UserLink from 'src/uikit/Link/User'

const SignUpForm = dynamic(() => import('./Form').then((r) => r.SignUpForm), {
  ssr: false,
})

export const SignUpPage: Page = () => {
  const { user: currentUser, logout } = useCurrentUser()

  let content: JSX.Element

  if (currentUser) {
    content = (
      <>
        <h3>
          Вы авторизованы как <UserLink user={currentUser} />{' '}
        </h3>

        <div>
          <Button onClick={logout}>Выйти</Button>
        </div>
      </>
    )
  } else {
    content = <SignUpForm />
  }

  return (
    <>
      <NextSeo title="Регистрация" noindex nofollow />

      {content}
    </>
  )
}
