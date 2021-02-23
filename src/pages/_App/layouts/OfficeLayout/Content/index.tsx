import React, { useMemo } from 'react'
import OfficeLayoutHeader from './Header'
import OfficeLayoutSideBar from './SideBar'
import { OfficeLayoutContentStyled } from './styles'

/**
 * Боковая панель
 */
const OfficeLayoutContent: React.FC = ({ children, ...other }) => {
  return useMemo(() => {
    return (
      <>
        <OfficeLayoutContentStyled {...other}>
          <OfficeLayoutHeader></OfficeLayoutHeader>

          <div
            style={{
              border: '1px solid blue',
            }}
            className="wrapper"
          >
            <div className="content">
              <div
                style={{
                  border: '1px solid red',
                  // minHeight: 2000,
                }}
              >
                OfficeLayoutContentStyled
                {children}
              </div>
            </div>

            <OfficeLayoutSideBar></OfficeLayoutSideBar>
          </div>
        </OfficeLayoutContentStyled>
      </>
    )
  }, [children, other])
}

export default OfficeLayoutContent
