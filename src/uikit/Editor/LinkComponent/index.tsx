import React from 'react'

import Link from 'next/link'
import { LinkComponentProps } from './interfaces'

const LinkComponent: React.FC<LinkComponentProps> = ({
  href,
  children,
  ...other
}) => {
  return (
    <Link href={href} {...other}>
      {children}
    </Link>
  )
}

export default LinkComponent
