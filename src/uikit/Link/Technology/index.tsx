import React, { useMemo } from 'react'

import Link from '..'

import { TechnologyLinkProps } from './interfaces'

const TechnologyLink: React.FC<TechnologyLinkProps> = ({
  object,
  ...other
}) => {
  return useMemo(() => {
    if (!object?.id) {
      return null
    }

    return (
      <Link
        href={`/technologies/${object.id}`}
        title={object?.name || ''}
        {...other}
      >
        {object?.name}
      </Link>
    )
  }, [object?.id, object?.name, other])
}

export default TechnologyLink
