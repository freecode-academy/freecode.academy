/**
 * Blog and MainPage resources have same url mask like "/blog/..."
 * so we need load resource and switch like type
 */

import React, { useMemo } from 'react'

import { Page } from '../_App/interfaces'
import { NextSeo } from 'next-seo'
import { MainPageGlobalStyled, MainPageStyled } from './styles'
import { HeroSection } from './Promo'
import { MainPageUsers } from './Users'

export const MainPage: Page = () => {
  return useMemo(
    () => (
      <MainPageStyled>
        <NextSeo
          title="FreeCode.Academy"
          description="Бесплатные онлайн курсы по JavaScript, React, NextJS и не только"
        />
        <MainPageGlobalStyled />

        <HeroSection />

        <MainPageUsers />
      </MainPageStyled>
    ),
    []
  )
}
