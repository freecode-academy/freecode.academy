import React, { useMemo } from 'react'
import { OfficeLayoutSideBarStyled } from './styles'

/**
 * Боковая панель
 */
const OfficeLayoutSideBar: React.FC = ({
  // @ts-expect-error types
  children,
  ...other
}) => {
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
