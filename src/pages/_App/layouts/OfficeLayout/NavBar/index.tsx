import React, { useContext, useMemo } from 'react'
import OfficeContext from '../Context'
import SideBarProject from './Projects'
import { OfficeLayoutNavBarStyled } from './styles'

/**
 * Боковая панель
 */
const OfficeLayoutNavBar: React.FC = ({ ...other }) => {
  const context = useContext(OfficeContext)

  return useMemo(() => {
    return (
      <>
        <OfficeLayoutNavBarStyled {...other}>
          <SideBarProject projects={context?.projects || []} />
        </OfficeLayoutNavBarStyled>
      </>
    )
  }, [context?.projects, other])
}

export default OfficeLayoutNavBar
