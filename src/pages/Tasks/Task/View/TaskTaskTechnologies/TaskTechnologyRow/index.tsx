import React, { useMemo } from 'react'
import Editor from 'src/uikit/Editor'
import TechnologyLink from 'src/uikit/Link/Technology'

import { TaskTechnologyRowProps } from './interfaces'
import TaskTechnologyRowView from './TaskTechnologyRowView'

const TaskTechnologyRow: React.FC<TaskTechnologyRowProps> = ({ object }) => {
  const technology = useMemo(() => {
    return (
      <>
        <TechnologyLink object={object.Technology} />
        <div>
          <Editor
            editorKey="technology-editor"
            value={object.Technology.components}
          />
        </div>
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

// const TaskTechnologyRow: React.FC<TaskTechnologyRowProps> = ({ object }) => {

//   return useMemo(() => {

//     return <>

//       {/* {snakbar} */}

//       <GridTableItemStyled
//         as="form"
//       >
//         <GridTableAttributeStyled>{`buttons`}</GridTableAttributeStyled>
//         <GridTableAttributeStyled>
//           <TechnologyLink
//             object={object.Technology}
//           />
//         </GridTableAttributeStyled>
//         <GridTableAttributeStyled>{object.level}</GridTableAttributeStyled>

//       </GridTableItemStyled>
//     </>
//   }, [object.Technology, object.level]);
// }

export default TaskTechnologyRow
