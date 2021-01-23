import React, { useMemo } from 'react'
import TechnologyLink from 'src/uikit/Link/Technology'

import { TaskTechnologyRowProps } from './interfaces'
import TaskTechnologyRowView from './TaskTechnologyRowView'

const TaskTechnologyRow: React.FC<TaskTechnologyRowProps> = ({ object }) => {
  const technology = useMemo(() => {
    return (
      <>
        <TechnologyLink object={object.Technology} />
      </>
    )
  }, [object.Technology])

  return useMemo(() => {
    return (
      <>
        {/* {snakbar} */}

        <TaskTechnologyRowView
          buttons={[]}
          level={<>{object.level}</>}
          technology={technology}
        />
      </>
    )
  }, [object.level, technology])
}

export default TaskTechnologyRow
