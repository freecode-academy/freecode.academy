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

          <div className="wrapper">
            <div className="content">{children}</div>

            <OfficeLayoutSideBar></OfficeLayoutSideBar>
          </div>
        </OfficeLayoutContentStyled>
      </>
    )
  }, [children, other])
}

export default OfficeLayoutContent
