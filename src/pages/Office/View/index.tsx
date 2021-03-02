import React, { useMemo, useContext } from 'react'
import OfficeContext from 'src/pages/_App/layouts/OfficeLayout/Context'

import Calendar from './Calendar'

const OfficePageView: React.FC = () => {
  const context = useContext(OfficeContext)

  const tasks = useMemo(() => {
    return context?.tasks || []
  }, [context?.tasks])

  return useMemo(() => {
    return (
      <>
        <Calendar tasks={tasks} range="week" />
      </>
    )
  }, [tasks])
}

export default OfficePageView
