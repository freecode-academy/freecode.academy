import React, { useMemo } from 'react'

/**
 * Шаблон для личного кабинета
 */
const OfficeLayout: React.FC = ({ children }) => {
  return useMemo(() => {
    return <>{children}</>
  }, [children])
}

export default OfficeLayout
