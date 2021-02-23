import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'
import OfficeLayoutNavBar from './NavBar'
// import OfficeLayoutSideBar from './SideBar'
import OfficeLayoutContent from './Content'
import { OfficeLayoutStyled } from './styles'

/**
 * Шаблон для личного кабинета
 */
const OfficeLayout: React.FC = ({ children }) => {
  return useMemo(() => {
    return (
      <>
        <NextSeo
          title="Личный кабинет"
          /**
           * Этот раздел не должен индексироваться
           */
          noindex
          nofollow
        />
        <OfficeLayoutStyled>
          <OfficeLayoutNavBar></OfficeLayoutNavBar>

          <OfficeLayoutContent>{children}</OfficeLayoutContent>

          {/* 

        */}

          {/* <OfficeLayoutSideBar>

        </OfficeLayoutSideBar> */}
        </OfficeLayoutStyled>
      </>
    )
  }, [children])
}

export default OfficeLayout
