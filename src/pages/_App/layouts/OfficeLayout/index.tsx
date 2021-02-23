/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import React, { useContext, useMemo } from 'react'
import OfficeLayoutNavBar from './NavBar'
// import OfficeLayoutSideBar from './SideBar'
import OfficeLayoutContent from './Content'
import { OfficeLayoutStyled } from './styles'
import useOfficeData from './hooks/useOfficeData'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'

/**
 * Шаблон для личного кабинета
 */
const OfficeLayout: React.FC = ({ children }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  console.log('user', context.user)

  useOfficeData({
    currentUserId: context.user?.id,
  })

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
