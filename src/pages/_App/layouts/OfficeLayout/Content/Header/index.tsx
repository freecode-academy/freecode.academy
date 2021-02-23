import React, { useMemo } from 'react'
import { OfficeLayoutHeaderStyled } from './styles'

const OfficeLayoutHeader: React.FC = () => {
  return useMemo(() => {
    return (
      <>
        <OfficeLayoutHeaderStyled>
          OfficeLayoutHeaderStyled
        </OfficeLayoutHeaderStyled>
      </>
    )
  }, [])
}

export default OfficeLayoutHeader
