import React, { useMemo } from 'react'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  // GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'

import { TaskTechnologyRowViewProps } from './interfaces'

const TaskTechnologyRowView: React.FC<TaskTechnologyRowViewProps> = ({
  buttons,
  technology,
  level,
  className,
  ...other
}) => {
  return useMemo(() => {
    return (
      <>
        <GridTableItemStyled as="form" className={className} {...other}>
          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>{buttons}</GridTableAttributeStyled>
          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>{technology}</GridTableAttributeStyled>

          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>{level}</GridTableAttributeStyled>
        </GridTableItemStyled>
      </>
    )
  }, [buttons, className, level, other, technology])
}

export default TaskTechnologyRowView
