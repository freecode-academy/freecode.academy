import React from 'react'

import { Page } from '../_App/interfaces'
import { NextSeo } from 'next-seo'
import { MainPageGlobalStyled, MainPageStyled } from './styles'

export const MainPage: Page = () => {
  return (
    <MainPageStyled>
      <NextSeo
        title="FreeCode.Academy"
        description="AI-powered learning, N8N automation, expert matching, and valuable tech insights"
      />
      <MainPageGlobalStyled />
    </MainPageStyled>
  )
}
