/* eslint-disable no-console */
import { NextSeo } from 'next-seo'
import React, { useContext, useMemo } from 'react'
import OfficeLayoutNavBar from './NavBar'
// import OfficeLayoutSideBar from './SideBar'
import OfficeLayoutContent from './Content'
import { OfficeLayoutStyled } from './styles'
import useOfficeData from './hooks/useOfficeData'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import OfficeContext, { OfficeContextValue } from './Context'

/**
 * Шаблон для личного кабинета
 */
const OfficeLayout: React.FC = ({ children }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  const { projects, tasks } = useOfficeData({
    currentUserId: context.user?.id,
  })

  const officeContext = useMemo<OfficeContextValue>(() => {
    return {
      user: context.user,
      projects,
      tasks,
    }
  }, [context.user, projects, tasks])

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
        <OfficeContext.Provider value={officeContext}>
          <OfficeLayoutStyled>
            <OfficeLayoutNavBar></OfficeLayoutNavBar>

            <OfficeLayoutContent>{children}</OfficeLayoutContent>

            {/* 

        */}

            {/* <OfficeLayoutSideBar>

        </OfficeLayoutSideBar> */}
          </OfficeLayoutStyled>
        </OfficeContext.Provider>
      </>
    )
  }, [children, officeContext])
}

export default OfficeLayout
