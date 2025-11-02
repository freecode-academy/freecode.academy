import React from 'react'
import { NextSeo } from 'next-seo'
import { Page } from 'src/pages/_App/interfaces'
import { SigninPageView } from './View'

export const SignInPage: Page = () => {
  return (
    <>
      <NextSeo title="Авторизация" noindex nofollow />

      <SigninPageView />
    </>
  )
}
