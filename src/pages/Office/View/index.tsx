import React, { useMemo } from 'react'
import OfficePageViewProjects from './Projects'

const OfficePageView: React.FC = () => {
  return useMemo(() => {
    return (
      <>
        <OfficePageViewProjects />
      </>
    )
  }, [])
}

export default OfficePageView
