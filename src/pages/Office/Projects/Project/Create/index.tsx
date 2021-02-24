import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
import { Page } from 'src/pages/_App/interfaces'

import View from './View'

const OfficeCreateProjectPage: Page = () => {
  const router = useRouter()

  const cancel = useCallback(() => {
    router.back()
  }, [router])

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Добавить проект" />
        <View cancel={cancel} />
      </>
    )
  }, [cancel])
}

OfficeCreateProjectPage.getInitialProps = () => {
  return {
    layout: {
      variant: 'office',
    },
  }
}

export default OfficeCreateProjectPage
