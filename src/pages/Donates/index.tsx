import { NextSeo } from 'next-seo'
import React from 'react'
import { Page } from '../_App/interfaces'

export const DonatesPage: Page = () => {
  return (
    <>
      <NextSeo title="Список донатов" noindex nofollow />
    </>
  )
}
