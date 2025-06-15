import React, { useMemo } from 'react'
import { SvgIconProps } from './interfaces'
import { SvgIconStyled } from './styles'

const SvgIcon: React.FC<SvgIconProps> = ({ src, ...other }) => {
  return useMemo(() => {
    return (
      <SvgIconStyled
        {...other}
        // @ts-expect-error types
        src={src}
      />
    )
  }, [other, src])
}

export default SvgIcon
