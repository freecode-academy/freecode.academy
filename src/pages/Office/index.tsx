import React, { useMemo } from 'react'
import { Page } from '../_App/interfaces'
import OfficePageView from './View'

/**
 * Личный кабинет
 */
const OfficePage: Page = () => {
  return useMemo(() => {
    return (
      <>
        <OfficePageView />
      </>
    )
  }, [])
}

OfficePage.getInitialProps = () => {
  return {
    layout: {
      variant: 'office',
    },
  }
}

export default OfficePage
