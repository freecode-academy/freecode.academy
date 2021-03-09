import Link from 'next/link'
import React, { useCallback, useContext, useMemo } from 'react'
import OfficeContext from '../Context'
import SideBarProject from './Projects'
import { OfficeLayoutNavBarStyled } from './styles'

import UikitUserLink from 'src/uikit/Link/User'

import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import TimerIcon from 'material-ui-icons/Timer'
import UserIcon from 'material-ui-icons/AccountCircle'
import OfficeIcon from 'material-ui-icons/Dashboard'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'

/**
 * Боковая панель
 */
const OfficeLayoutNavBar: React.FC = ({ ...other }) => {
  const context = useContext(OfficeContext)

  const prismaContext = useContext(PrismaContext) as PrismaCmsContext

  const openLoginForm = useCallback(() => {
    prismaContext.openLoginForm()
  }, [prismaContext])

  const userMenu = useMemo(() => {
    if (context?.user) {
      return (
        <UikitUserLink user={context?.user} showName={false} size="small" />
      )
    } else {
      return (
        <IconButton onClick={openLoginForm}>
          <UserIcon />
        </IconButton>
      )
    }
  }, [context?.user, openLoginForm])

  return useMemo(() => {
    return (
      <>
        <OfficeLayoutNavBarStyled {...other}>
          <div className="mainLinks">
            <Link href="/">
              <a title="На главную">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </a>
            </Link>
            <Link href="/office">
              <a title="Офис">
                <IconButton>
                  <OfficeIcon />
                </IconButton>
              </a>
            </Link>
            <Link href="/office/timers">
              <a title="Лог выполнения">
                <IconButton>
                  <TimerIcon />
                </IconButton>
              </a>
            </Link>

            <div className="separator" />

            {userMenu}
          </div>

          <hr />

          <SideBarProject
            projects={context?.projects || []}
            tasks={context?.tasks || []}
          />
        </OfficeLayoutNavBarStyled>
      </>
    )
  }, [context?.projects, context?.tasks, other, userMenu])
}

export default OfficeLayoutNavBar
