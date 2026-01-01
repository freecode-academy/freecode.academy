import React from 'react'

import { Page } from '../_App/interfaces'
import { NextSeo } from 'next-seo'
import { MainPageStyled } from './styles'

export const MainPage: Page = () => {
  return (
    <MainPageStyled>
      <NextSeo
        title="FreeCode.Academy — Expert Registry with AI-Powered Matching"
        description="Connect with top tech experts through AI agents. Find mentors, developers, and specialists in React, Node.js, TypeScript, and more."
      />
    </MainPageStyled>
  )
}
