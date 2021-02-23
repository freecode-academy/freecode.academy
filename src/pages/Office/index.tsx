import React, { useMemo } from 'react'
import { Page } from '../_App/interfaces'

/**
 * Личный кабинет
 */
const OfficePage: Page = () => {
  return useMemo(() => {
    return <>OfficePage</>
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
