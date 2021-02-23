import React, { useMemo } from 'react'
import { OfficeLayoutNavBarStyled } from './styles'

/**
 * Боковая панель
 */
const OfficeLayoutNavBar: React.FC = ({ children, ...other }) => {
  return useMemo(() => {
    return (
      <>
        <OfficeLayoutNavBarStyled {...other}>
          <div
            style={{
              border: '1px solid yellow',
              // minHeight: 1000,
            }}
          >
            OfficeLayoutNavBarStyled
            {children}
          </div>
        </OfficeLayoutNavBarStyled>
      </>
    )
  }, [children, other])
}

export default OfficeLayoutNavBar
