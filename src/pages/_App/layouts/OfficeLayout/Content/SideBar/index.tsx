import React, { useMemo } from 'react'
import { OfficeLayoutSideBarStyled } from './styles'

/**
 * Боковая панель
 */
const OfficeLayoutSideBar: React.FC = ({ children, ...other }) => {
  return useMemo(() => {
    return (
      <>
        <OfficeLayoutSideBarStyled {...other}>
          {children}
        </OfficeLayoutSideBarStyled>
      </>
    )
  }, [children, other])
}

export default OfficeLayoutSideBar
