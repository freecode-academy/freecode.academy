import { ProjectsConnectionProjectFragment } from 'src/gql/generated'

export interface ProjectsListProjectProps {
  tasksLimit: number
  object: ProjectsConnectionProjectFragment
}

export const ProjectListProject: React.FC<ProjectsListProjectProps> = () => {
  return <>ProjectListProject</>
}
