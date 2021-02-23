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
          <div
            style={{
              border: '1px solid red',
              // minHeight: 1000,
            }}
          >
            OfficeLayoutSideBarStyled
            {children}
          </div>
        </OfficeLayoutSideBarStyled>
      </>
    )
  }, [children, other])
}

export default OfficeLayoutSideBar
