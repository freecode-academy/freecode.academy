import React, { useMemo } from 'react'
import { PaperStyled } from './styles'

// @ts-expect-error types
const Paper: React.FC = ({ children, ...other }) => {
  return useMemo(() => {
    return <PaperStyled {...other}>{children}</PaperStyled>
  }, [children, other])
}

export default Paper
