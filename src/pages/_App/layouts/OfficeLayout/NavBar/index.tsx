import Link from 'next/link'
import React, { useContext, useMemo } from 'react'
import OfficeContext from '../Context'
import SideBarProject from './Projects'
import { OfficeLayoutNavBarStyled } from './styles'

import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import TimerIcon from 'material-ui-icons/Timer'

/**
 * Боковая панель
 */
const OfficeLayoutNavBar: React.FC = ({ ...other }) => {
  const context = useContext(OfficeContext)

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
            <Link href="/office/timers">
              <a title="Лог выполнения">
                <IconButton>
                  <TimerIcon />
                </IconButton>
              </a>
            </Link>
          </div>

          <hr />

          <SideBarProject projects={context?.projects || []} />
        </OfficeLayoutNavBarStyled>
      </>
    )
  }, [context?.projects, other])
}

export default OfficeLayoutNavBar
