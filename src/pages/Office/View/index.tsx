import React, { useMemo, useContext } from 'react'
import OfficeContext from 'src/pages/_App/layouts/OfficeLayout/Context'

import Calendar from './Calendar'

const OfficePageView: React.FC = () => {
  const context = useContext(OfficeContext)

  return useMemo(() => {
    return (
      <>
        <Calendar tasks={context?.tasks || []} />
      </>
    )
  }, [context?.tasks])
}

export default OfficePageView
