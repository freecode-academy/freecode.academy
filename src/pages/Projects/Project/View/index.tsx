import React from 'react'
import { ProjectViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'
import { NextSeo } from 'next-seo'
// import TasksView from 'src/pages/Tasks/View'
// import CreateTaskForm from 'src/pages/Tasks/Task/View/form/CreateTask'
// import { CreateTaskProcessorMutation } from 'src/gql/generated'
// import { Button } from 'material-ui'
import TasksView from 'src/pages/Tasks/View'
import {
  ProjectFragment,
  SortOrder,
  useTasksConnectionQuery,
} from 'src/gql/generated'
import { makeProjectLink } from 'src/uikit/Link/Project'

type ProjectViewProps = {
  project: ProjectFragment
}

export const ProjectView: React.FC<ProjectViewProps> = ({
  project,
  ...other
}) => {
  // const [opened, setOpened] = useState(false)

  // const toggleOpened = useCallback(() => {
  //   setOpened(!opened)
  // }, [opened])

  // const cancel = useCallback(() => {
  //   setOpened(false)
  // }, [])

  // const onCreateTask = useCallback(
  //   (data: CreateTaskProcessorMutation) => {
  //     if (data.response.data?.id) {
  //       // router.push(`/tasks/${data.response.data?.id}`);

  //       cancel()
  //     }
  //   },
  //   [cancel]
  // )

  // const createTaskForm = useMemo(() => {
  //   return (
  //     <>
  //       {!opened ? (
  //         <Button onClick={toggleOpened} variant="raised" size="small">
  //           Добавить задачу
  //         </Button>
  //       ) : null}
  //       <CreateTaskForm
  //         opened={opened}
  //         onSuccess={onCreateTask}
  //         cancel={cancel}
  //         options={{
  //           variables: {
  //             data: {
  //               name: '',
  //               Project: {
  //                 connect: {
  //                   id: project.id,
  //                 },
  //               },
  //             },
  //           },
  //         }}
  //       />
  //     </>
  //   )
  // }, [opened, toggleOpened, onCreateTask, cancel, project.id])

  const name = project.Resource?.name || project.name || ''

  const tasksResponse = useTasksConnectionQuery({
    variables: {
      orderBy: {
        updatedAt: SortOrder.DESC,
      },
      where: {
        ProjectTasks: {},
      },
      first: 10,
    },
  })

  const tasks = tasksResponse.data?.tasks ?? []

  return (
    <>
      <NextSeo
        title={name}
        description={name ? `Проект "${name}"` : ''}
        canonical={makeProjectLink(project)}
      />
      <ProjectViewStyled {...other}>
        <Typography variant="title">{name}</Typography>

        {/* {createTaskForm} */}

        {tasks.length > 0 ? (
          <TasksView
            objects={tasks}
            page={0}
            limit={tasks.length}
            total={tasks.length}
          />
        ) : null}
      </ProjectViewStyled>
    </>
  )
}
