import React, { useMemo } from 'react'

import { OfficeProjectPageViewProps } from './interfaces'
import { OfficeProjectPageViewStyled } from './styles'

import Tasks from './Tasks'

const OfficeProjectPageView: React.FC<OfficeProjectPageViewProps> = ({
  project,
}) => {
  return useMemo(() => {
    return (
      <>
        <OfficeProjectPageViewStyled>
          <Tasks project={project} />
        </OfficeProjectPageViewStyled>
      </>
    )
  }, [project])
}

export default OfficeProjectPageView
