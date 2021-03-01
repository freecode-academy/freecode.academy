import React, { useMemo } from 'react'
// import { Button } from 'material-ui'

import { OfficeProjectPageViewProps } from './interfaces'
import { OfficeProjectPageViewStyled } from './styles'

// import Tasks from './Tasks'
import ProjectCalendar from './Calendar'

const OfficeProjectPageView: React.FC<OfficeProjectPageViewProps> = ({
  project,
}) => {
  // const [createTaskOpened, setCreateTaskOpened] = useState(false);

  // const opendCreateTaskForm = useCallback(() => {

  //   setCreateTaskOpened(true);
  // }, []);

  const tasks = useMemo(() => {
    return project.ProjectTasks?.map((n) => n.Task) || []
  }, [project.ProjectTasks])

  return useMemo(() => {
    return (
      <>
        <OfficeProjectPageViewStyled>
          {/* <Tasks project={project} /> */}

          <ProjectCalendar tasks={tasks} project={project} />
        </OfficeProjectPageViewStyled>
      </>
    )
  }, [tasks, project])
}

export default OfficeProjectPageView
